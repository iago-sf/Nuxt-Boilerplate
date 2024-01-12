export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  let whereStatement: Record<string, any> = {
    deleted_at: body.deleted ? { not: null } : null,
  }

  if (body.search !== "{}") {
    let search: Record<string, string> = JSON.parse(body.search)
    for (const [key, value] of Object.entries(search)) {
      if (value !== "") {
        switch (key) {
          case "id":
            whereStatement[key] = { equals: parseInt(value) }
            break
          default:
            whereStatement[key] = { contains: value }
            break
        }
      }
    }
  }

  let orderByStatement: Array<Record<string, string>> = [{ id: "desc" }]
  if (body.sortBy !== "{}") {
    orderByStatement = []
    let sortBy: Record<string, { key: string; order: string }> = JSON.parse(body.sortBy)

    for (const [a, e] of Object.entries(sortBy)) {
      if (e !== null) {
        orderByStatement.push({ [e.key]: e.order })
      }
    }
  }

  body.itemsLength = await prisma.users.count({
    where: whereStatement,
  })

  body.items = await prisma.users.findMany({
    skip: (body.page - 1) * body.itemsPerPage,
    take: body.itemsPerPage,
    where: whereStatement,
    select: {
      id: true,
      name: true,
      email: true,
    },
    orderBy: orderByStatement,
  })

  setResponseStatus(event, 201, "Users loaded successfully")
  return { tableData: body }
})

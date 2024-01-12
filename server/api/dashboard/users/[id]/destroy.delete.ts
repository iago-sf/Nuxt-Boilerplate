export default defineEventHandler(async (event) => {
  const { params } = event.context

  if (!params || !params.id) {
    throw createError({
      statusCode: 403,
      statusMessage: "Invalid ID",
    })
  }

  const user = await prisma.users.findFirst({
    where: { id: parseInt(params.id) },
  })

  if (!user) {
    throw createError({
      statusCode: 403,
      statusMessage: "User not found",
    })
  }

  await prisma.users.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      deleted_at: new Date(),
    },
  })

  setResponseStatus(event, 201)

  return { message: "User deleted" }
})
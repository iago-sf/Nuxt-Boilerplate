import { getServerSession } from "#auth"

export default eventHandler(async (event) => {
  if (!event.node.req.url?.startsWith("/api/dashboard")) {
    return
  }

  const session = await getServerSession(event)
  if (!session) {
    throw createError({ statusMessage: "Unauthenticated", statusCode: 403 })
  }
})

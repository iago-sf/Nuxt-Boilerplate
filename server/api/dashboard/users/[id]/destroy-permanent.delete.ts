import { defaultError } from "@/utils/defaultError"

export default defineEventHandler(async (event) => {
  const { params } = event.context

  if (!params || !params.id || parseInt(params.id) == -1) {
    defaultError("Invalid user ID")
  } else {
    const user = await prisma.users.findFirst({
      where: { id: parseInt(params.id) },
    })

    if (!user) {
      throw createError({
        statusCode: 403,
        statusMessage: "User not found",
      })
    }

    await prisma.users.delete({
      where: {
        id: parseInt(params.id),
      },
    })

    setResponseStatus(event, 201)

    return { message: "User deleted permanently" }
  }
})

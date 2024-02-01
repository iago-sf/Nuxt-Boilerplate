import { defaultError } from "@/utils/defaultError"

export default defineEventHandler(async (event) => {
  const { params } = event.context

  if (!params || !params.id || parseInt(params.id) == -1) {
    defaultError("Invalid user ID")
  } else {
    const user = await prisma.users.findFirst({
      where: { id: parseInt(params.id) },
    })

    if (!user) defaultError("User not found")

    await prisma.users.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        deleted_at: null,
      },
    })

    setResponseStatus(event, 201)

    return { message: "User restored" }
  }
})

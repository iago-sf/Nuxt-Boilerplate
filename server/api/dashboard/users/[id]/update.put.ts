import { hash } from "bcrypt"
import { defaultError } from "@/utils/defaultError"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body || !body.id || body.id == -1) defaultError("Invalid user ID")

  const user = await prisma.users.findFirst({
    where: { id: body.id },
  })

  if (!user) defaultError("User not found")

  await prisma.users.update({
    where: {
      id: body.id,
    },
    data: {
      email: body.email ?? user.email,
      name: body.name ?? user.name,
      password: body.password ? await hash(body.password, 12) : user.password,
    },
  })

  setResponseStatus(event, 201)

  return { message: "User updated" }
})

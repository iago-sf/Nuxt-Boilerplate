import { hash } from "bcrypt"
import { defaultError } from "@/utils/defaultError"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const userExists = await prisma.users.findFirst({
    where: {
      OR: [{ email: body.email }, { name: body.name }],
    },
  })

  if (userExists) defaultError("User already exists")

  await prisma.users.create({
    data: {
      email: body.email,
      name: body.name,
      password: await hash(body.password, 12),
    },
  })

  setResponseStatus(event, 201)

  return { message: "User created" }
})

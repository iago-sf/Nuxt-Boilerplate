import { hash } from "bcrypt"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const user = await prisma.users.findFirst({
    where: { id: body.id },
  })

  if (!user) {
    throw createError({
      statusCode: 403,
      statusMessage: "User not found",
    })
  }

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

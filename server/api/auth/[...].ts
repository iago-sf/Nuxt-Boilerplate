import CredentialsProvider from "next-auth/providers/credentials"
import { NuxtAuthHandler } from "#auth"
import { compare } from "bcrypt"

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/login",
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      async authorize(credentials: { email: string; password: string }) {
        const user = await prisma.users.findUnique({
          where: { email: credentials?.email },
        })

        if (!user) {
          throw createError({
            statusCode: 403,
            message: "El usuario indicado no existe",
          })
        }

        const isValidPassword = await compare(credentials?.password, user.password)

        if (!isValidPassword) {
          throw createError({
            statusCode: 403,
            message: "Contraseña incorrecta",
          })
        }

        return user
      },
    }),
  ],
  callbacks: {
    // Specify here the payload of your token and session
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id
        token.nombre = user.name
        token.email = user.email
      }
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id
      session.user.nombre = token.name
      session.user.email = token.email
      return session
    },
  },
})

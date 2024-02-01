export const defaultError = (message: string): never => {
  throw createError({
    statusCode: 403,
    statusMessage: message,
  })
}

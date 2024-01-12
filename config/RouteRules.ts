export const RouteRules = {
  "/": { prerender: true },
  "/dashboard": { redirect: "/dashboard/users" },
  "/dashboard/**": { ssr: false },
}

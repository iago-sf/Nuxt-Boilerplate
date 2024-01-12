import { ref } from "vue"
import { type Ref } from "@vue/reactivity"

type RouteItem = {
  value: string
  icon: string
  route?: string
  path?: string
  admin?: boolean
  childs?: Array<RouteItem>
}

const router = useRouter()

/*
 * Parent routes will have "path" parameters instead or "route" ones
 * "routes" will be used in their childs
 */

// Route with childs example:
/*
  {
    value: "title",
    icon: "icon",
    path: "relative-path",
    childs: [
      {
        value: "title",
        route: "route name",
        icon: "icon",
      },
      {
        value: "title",
        route: "route name",
        icon: "icon",
      },
    ],
  },
  */

const routesArray: Array<RouteItem> = [
  {
    value: "Users",
    route: "/dashboard/users",
    icon: "mdi-account-group",
  },
]

export const Routes: Ref<Array<RouteItem>> = ref(routesArray)

export function setRoutes({
  newValue,
  element = 1,
  key = "value",
  child = false,
  childElement = 1,
}: {
  newValue: string | boolean | Array<RouteItem>
  element: number
  key: string
  child: boolean
  childElement: number
}): void {
  if (child) {
    Routes.value[element - 1].childs[childElement - 1][key] = newValue
  } else {
    Routes.value[element - 1][key] = newValue
  }
}

export function checkRoute(route: string) {
  if (route == router.currentRoute.value.fullPath) return true
  return false
}

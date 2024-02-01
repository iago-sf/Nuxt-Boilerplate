import { ref } from "vue"
import { type Ref } from "@vue/reactivity"

type KeyType = "value" | "icon" | "route" | "path" | "admin" | "childs"
type RouteItem = {
  value: string
  icon: string
  route?: string | undefined
  path?: string | undefined
  admin?: boolean | undefined
  childs?: RouteItem[] | undefined
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

const routesArray: RouteItem[] = [
  {
    value: "Users",
    route: "/dashboard/users",
    icon: "mdi-account-group",
  },
]

const checkIsArrayOfRouteItem = (value: any): value is RouteItem[] => {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        "value" in item &&
        typeof item.value === "string" &&
        "route" in item &&
        typeof item.route === "string" &&
        "icon" in item &&
        typeof item.icon === "string" &&
        ("childs" in item
          ? Array.isArray(item.childs) && item.childs.every(checkIsArrayOfRouteItem)
          : true)
    )
  )
}

export const Routes: Ref<RouteItem[]> = ref(routesArray)

export function setRoutes(
  newValue: string | boolean | RouteItem[],
  element: number = 1,
  key: KeyType = "value",
  child: boolean = false,
  childElement: number = 1
): void {
  let target: RouteItem | undefined = child
    ? Routes.value[element - 1]?.childs?.[childElement - 1]
    : Routes.value[element - 1]

  if (!target) return

  if (
    typeof newValue == "string" &&
    (key == "value" || key == "icon" || key == "route" || key == "path")
  ) {
    target[key] = newValue
  }

  if (typeof newValue == "boolean" && key == "admin") target[key] = newValue
  if (checkIsArrayOfRouteItem(newValue) && key == "childs") target[key] = newValue
}

export function checkRoute(route: string | undefined) {
  if (route == router.currentRoute.value.fullPath) return true
  return false
}

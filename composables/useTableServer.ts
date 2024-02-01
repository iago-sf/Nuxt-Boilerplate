import { ref, watch, reactive } from "vue"
import debounce from "lodash.debounce"

type SortItem = { key: string; order?: boolean | "asc" | "desc" }

interface TableData {
  page: number
  itemsPerPage: number
  sortBy: SortItem[]
  items: any[]
  search: any
  itemsLength: string | number
  deleted: boolean
  alternative: boolean
}

export default function useTableServer() {
  const loading = ref(false)
  const endPoint = ref("")
  const tableData: TableData = reactive({
    page: 1,
    itemsPerPage: 10,
    sortBy: [],
    items: [],
    search: {},
    itemsLength: 0,
    deleted: false,
    alternative: false,
  })

  let itemsPerPageOptions = [
    { value: 10, title: "10" },
    { value: 25, title: "25" },
    { value: 50, title: "50" },
    { value: 100, title: "100" },
  ]

  const updateItems = debounce(() => loadItems(), 500)

  const loadItems = async () => {
    if (loading.value) {
      return
    }

    loading.value = true

    const cleanedSearch = Object.entries(tableData.search).reduce(
      (a, [k, v]) => (v !== "" ? { ...a, [k]: v } : a),
      {}
    )

    const searchJson = JSON.stringify(cleanedSearch)
    const sortByJson = JSON.stringify(tableData.sortBy)

    await $fetch(`${endPoint.value}/loadItems`, {
      baseURL: "/api",
      method: "POST",
      body: {
        page: tableData.page,
        itemsPerPage: tableData.itemsPerPage,
        sortBy: sortByJson,
        search: searchJson,
        deleted: tableData.deleted,
        alternative: tableData.alternative,
      },
      onResponse: (res) => {
        const data = res.response._data

        tableData.items = data.tableData.items
        tableData.itemsLength = data.tableData.itemsLength

        loading.value = false
      },
    })
  }

  const resetTable = () => {
    tableData.page = 1
    tableData.itemsPerPage = 10
    tableData.sortBy = []
    tableData.search = {}
    tableData.deleted = false
    tableData.alternative = false

    loadItems()
  }

  watch(
    () => tableData.deleted,
    () => {
      loadItems()
    }
  )

  watch(
    () => tableData.alternative,
    () => {
      loadItems()
    }
  )

  return {
    tableData,
    endPoint,
    loading,
    updateItems,
    itemsPerPageOptions,
    loadItems,
    resetTable,
  }
}

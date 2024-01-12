export type Headers = (
  | {
      title: string
      key: string
      align: string
      sortable?: undefined
      exportable?: undefined
    }
  | {
      title: string
      key: string
      align: string
      sortable: boolean
      exportable: boolean
    }
)[]

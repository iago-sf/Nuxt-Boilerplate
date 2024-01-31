type Headers = {
  readonly key?: string & {}
  readonly title?: string
  readonly fixed?: boolean | undefined
  readonly align?: "start" | "end" | "center" | undefined
  readonly width?: string | number | undefined
  readonly minWidth?: string | undefined
  readonly maxWidth?: string | undefined
  readonly headerProps?: { readonly [x: string]: any } | undefined
  readonly sortable?: boolean | undefined
  readonly children?: readonly any[] | undefined
}[]

export type { Headers }

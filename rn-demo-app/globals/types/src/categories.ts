export interface SearchCategory {
  count: number
  id: string
  name: string
  parent?: string
  url: string
  url_handle: string
}

export interface RubricatorCategory {
  children: RubricatorCategory[]
  external_id: string
  id: string
  name: string
  parent_external_id: string | null
  parent_id: string | null
  url: string
}

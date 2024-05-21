export interface CategoryType {
  count: number
  id: string
  name: string
  parent?: string
  url: string
  url_handle: string
}

export interface ProductType {
  _id: string
  brand: string
  categories: CategoryType[]
  category_ids: number[]
  currency: string
  description: string
  id: string
  image_url: string
  image_url_handle: string
  name: string
  picture: string
  price: number
  price_formatted: string
  price_full: number
  price_full_formatted: string
  url: string
  url_handle: string
  fashion_feature?: string
  fashion_gender?: string
  fashion_wear_type?: string
}

export interface ItemType {
  id: string
  name: string
  price_full_formatted?: string
}

interface QueryType {
  name: string
  url: string
  url_handle: string
}

export interface SearchResponse {
  categories?: CategoryType[]
  clarification: boolean
  html: string | null
  products?: ProductType[]
  products_total: number
  queries: QueryType[]
  requests_count: number
  search_query: string
}

export interface ProductSearchProps {
  navigation: any
  viewOnly?: boolean
}

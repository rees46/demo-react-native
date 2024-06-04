import { SearchCategory } from './categories'

export interface ProductType {
  _id?: string
  uniqid?: string
  brand: string
  categories: SearchCategory[]
  category_ids: string[]
  currency: string
  quantity?: number
  description: string
  id: string
  image_url?: string
  image_url_handle?: string
  name: string
  picture: string
  price: string
  image_url_resized?: Record<string, string>
  price_formatted?: string
  price_full?: number
  oldprice_full?: number
  price_full_formatted?: string
  url: string
  url_handle?: string
  discount?: boolean
  ignored?: boolean
  image_download_data?: {
    could_be_widgetable?: boolean
    image?: string
    image_changed?: boolean
    name?: string
    persisted?: boolean
    price?: string
    time?: string
    url?: string
    widgetable?: boolean
  }
  image_download_start_at?: string
  is_available?: boolean
  locations?: Record<string, unknown>
  oldprice: string
  sales_rate?: number
  widgetable?: boolean
}

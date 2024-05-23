import { CategoryType } from './categories'

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
  image_url_resized: Record<string, string>
  price_formatted: string
  price_full: number
  oldprice_full?: number
  price_full_formatted: string
  url: string
  url_handle: string
  fashion_feature?: string
  fashion_gender?: string
  fashion_wear_type?: string
}

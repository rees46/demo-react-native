import { ProductType } from '@globals/types'

export interface CategoryProductsOptions {
  limit: number
  shop_id: string
}

interface UseCategoryProductsProps {
  categoryId?: string
  options?: CategoryProductsOptions
}

interface UseCategoryProductsReturnedType {
  loading: boolean
  products: ProductType[]
  loadProducts: VoidFunction
  error?: Error
  total?: number
}

export type UseCategoryProducts = (
  props: UseCategoryProductsProps
) => UseCategoryProductsReturnedType

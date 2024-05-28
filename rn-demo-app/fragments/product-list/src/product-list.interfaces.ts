import { ProductType } from '@globals/types'

export interface ProductListProps {
  navigation: any
  products: ProductType[]
  onLoad?: VoidFunction
}

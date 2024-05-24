import { ProductType } from '@globals/types'

export interface ProductCardProps {
  item: ProductType
  onPress?: (id: string) => void
}

import { ProductType } from '@globals/types'

export type VariantType = 'normal' | 'big'

export interface ProductCardProps {
  item: ProductType
  onItemPress?: VoidFunction
  variant?: VariantType
  width?: number
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch'
  onlyRightPadding?: boolean
  withButton?: boolean
  onButtonPress?: VoidFunction
}

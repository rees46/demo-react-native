import { ProductType } from '@globals/types'

export type VariantType = 'normal' | 'big'

export interface ProductCardProps {
  item: ProductType
  onPress?: (id: string) => void
  variant?: VariantType
  width?: number
  alignItems?: "center" | "flex-end" | "flex-start" | "baseline" | "stretch"
  onlyRightPadding?: boolean
}

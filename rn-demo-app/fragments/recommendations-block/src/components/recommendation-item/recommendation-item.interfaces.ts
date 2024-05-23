import { ProductType } from '@globals/types'

export interface RecommendationItemProps {
  item: ProductType
  onPress: (id: string) => void
}

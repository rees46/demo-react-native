import { ItemType } from '../../product-search.interfaces'

export interface CategoryItemProps {
  item: ItemType
  onPress?: (id: string) => void
}

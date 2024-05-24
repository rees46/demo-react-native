import { ItemType } from '../../product-search.interfaces'

export interface ProductItemProps {
  item: ItemType
  onPress?: (id: string) => void
}

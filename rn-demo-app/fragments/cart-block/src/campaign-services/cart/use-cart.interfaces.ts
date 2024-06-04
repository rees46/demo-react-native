import { ProductType } from '@globals/types'

interface UseCartProps {
  navigation?: any
}

export interface UseCartReturnedType {
  loading: boolean
  items: ProductType[]
  totalPrice: number
  error?: Error
  removeCartItem?: (id: string) => void
}

export interface CartItem {
  quantity: number
  uniqid: string
}

export type UseCart = (props: UseCartProps) => UseCartReturnedType

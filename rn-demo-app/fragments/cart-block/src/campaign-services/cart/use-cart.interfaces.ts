import { ProductType } from '@globals/types'

export interface ExtendedProductType extends ProductType {
  key: string
}

export interface UseCartReturnedType {
  loading: boolean
  items: ExtendedProductType[]
  totalPrice: number
  error?: Error
}

export interface CartItem {
  quantity: number
  uniqid: string
}

export type UseCart = () => UseCartReturnedType

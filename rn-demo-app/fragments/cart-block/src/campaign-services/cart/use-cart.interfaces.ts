import { ProductType } from '@globals/types'

export interface UseCartReturnedType {
  loading: boolean
  items: ProductType[]
  error?: Error
}

export type UseCart = () => UseCartReturnedType

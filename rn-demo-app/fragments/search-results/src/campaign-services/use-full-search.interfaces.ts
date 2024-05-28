import { ProductType }        from '@globals/types'

export interface FullSearchOptions {
  type: 'full_search'
  limit: number
}


export interface UseFullSearchProps {
  searchQuery?: string
  options?: FullSearchOptions
}

export interface UseFullSearchPropsReturnedType {
  loading: boolean
  products: ProductType[]
  loadResults: VoidFunction
  error?: Error
  total?: number
}

export type UseFullSearch = (props: UseFullSearchProps) => UseFullSearchPropsReturnedType

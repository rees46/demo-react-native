import { Dispatch }       from 'react'
import { SetStateAction } from 'react'

import { CategoryType }   from '../product-search.interfaces'
import { ProductType }    from '../product-search.interfaces'

interface UseProductSearchReturnedType {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
  items: ProductType[]
  categories: CategoryType[]
  totalResults: number
}

export type UseProductSearchType = () => UseProductSearchReturnedType

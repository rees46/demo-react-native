import { useEffect }                 from 'react'

import { useState }       from 'react'

import { useSDK }                    from '@stores/rn-sdk'

import { SEARCH_TYPE }               from '../product-search.constants'
import { CategoryType }              from '../product-search.interfaces'
import { ProductType } from '../product-search.interfaces'
import { UseProductSearchType }      from './use-product-search.interfaces'
import { useDebounce }               from '../utils'

export const useProductSearch: UseProductSearchType = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [items, setItems] = useState<ProductType[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [totalResults, setTotalResults] = useState(0)
  const debouncedSearchQuery = useDebounce(searchQuery, 200)
  const sdk = useSDK()

  useEffect(() => {
    let isSubscribed = true

    const fetchSearchResults = async () => {
      if (debouncedSearchQuery.trim()) {
        try {
          const res = await sdk.search({
            type: SEARCH_TYPE,

            search_query: debouncedSearchQuery,
          })

          if (isSubscribed) {
            setTotalResults(res?.products_total ?? 0)
            setItems(res?.products ?? [])
            setCategories(res?.categories ?? [])
          }
        } catch (error) {
          console.error('Error fetching product-search results:', error)
        }
      } else {
        if (isSubscribed) {
          setTotalResults(0)
          setItems([])
          setCategories([])
        }
      }
    }

    fetchSearchResults()

    return () => {
      isSubscribed = false
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery])

  return {
    searchQuery,
    setSearchQuery,
    items,
    categories,
    totalResults,
  }
}

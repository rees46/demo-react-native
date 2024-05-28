import { useCallback }        from 'react'
import { useEffect }          from 'react'
import { useState }           from 'react'

import { ProductType }        from '@globals/types'
import { useSDK }             from '@stores/rn-sdk'
import {defaultOptions, SEARCH_TYPE} from "./use-full-search.constants";
import {UseFullSearch} from "./use-full-search.interfaces";


export const useFullSearch: UseFullSearch = ({ searchQuery, options = {} }) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState<number>()
  const sdk = useSDK()
  const [error, setError] = useState<Error>()

  const loadResults = useCallback(async () => {
    if (!searchQuery || loading || error) return

    setLoading(true)
    setError(undefined)
    try {
      const newProducts = await sdk.search({
        ...defaultOptions,
        ...options,
        search_query: searchQuery,
        page,
      })

      setProducts((prev) => [...prev, ...newProducts.products])
      setTotal(newProducts.products_total)
      setPage((prevPage) => prevPage + 1)
    } catch (err) {
      console.error('Error loading search results:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [loading, sdk, searchQuery, page, error])

  useEffect(() => {
    if (!loading) {
      loadResults()
    }
  }, [])

  return {
    loading,
    products,
    loadResults,
    error,
    total
  }
}

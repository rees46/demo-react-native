import { useCallback }   from 'react'
import { useEffect }     from 'react'
import { useState }      from 'react'

import { ProductType }   from '@globals/types'
import { useApi }        from '@globals/api-service'

import { defaultOptions } from './use-category-products.constants'

export const useCategoryProduct = ({ categoryId, options = {} }) => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState<number>()
  const [error, setError] = useState<Error>()
  const { publicApi } = useApi()

  const loadProducts = useCallback(async () => {
    if (!categoryId || loading || error) return

    setLoading(true)
    setError(undefined)
    try {
      const { data } = await publicApi.get('/products', {
        params: {
          ...defaultOptions,
          ...options,
          categories: categoryId,
          page,
        },
      })

      console.log('data: ', data)

      setProducts((prev) => [...prev, ...data.products])
      setTotal(data.products_total)
      setPage((prevPage) => prevPage + 1)
    } catch (err) {
      console.error('Error loading search results:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [loading, categoryId, page, error])

  useEffect(() => {
    if (!loading) {
      loadProducts()
    }
  }, [])

  return {
    loading,
    products,
    loadProducts,
    error,
    total,
  }
}

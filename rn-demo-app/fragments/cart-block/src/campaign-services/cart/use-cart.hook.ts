import { useCallback }                           from 'react'
import { useEffect }                             from 'react'
import { useState }                              from 'react'

import { SHOP_ID }                               from '@globals/constants'
import { useApi }                                from '@globals/api-service'
import { useSDK }                                from '@stores/rn-sdk'

import { CartItem }                               from './use-cart.interfaces'

import { ExtendedProductType }          from './use-cart.interfaces'

import { UseCart } from './use-cart.interfaces'

export const useCart: UseCart = () => {
  const [items, setItems] = useState<ExtendedProductType[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const sdk = useSDK()
  const { publicApi } = useApi()
  const [error, setError] = useState<Error>()

  const getProductInfo = useCallback(
    async (items: CartItem[]): Promise<ExtendedProductType[]> => {
      try {
        const requests = items.map(({ uniqid: id, quantity }) =>
          publicApi
            .get('/products/get', {
              params: {
                shop_id: SHOP_ID,
                item_id: id,
              },
            })
            .then((response) => {
              const product: ExtendedProductType = response.data
              return Array.from({ length: quantity }, (_, index) => {
                setTotalPrice((prev) => prev + Number(product.price))

                return {
                  ...product,
                  key: `${product.uniqid}_${index + 1}`,
                }
              })
            }))
        const productsArrays: ExtendedProductType[][] = await Promise.all(requests)

        return productsArrays.flat()
      } catch (error) {
        console.error('Failed to fetch product info', error)
        throw error
      }
    },
    [publicApi]
  )

  const loadCartItems = useCallback(async () => {
    if (loading || error) return

    setLoading(true)
    setError(undefined)
    try {
      const { data } = await sdk.cart()

      const products = await getProductInfo(data.items)

      setItems(products)
    } catch (err) {
      console.error('Error loading cart items:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [loading, sdk, error, getProductInfo])

  useEffect(() => {
    loadCartItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    items,
    error,
    totalPrice,
  }
}

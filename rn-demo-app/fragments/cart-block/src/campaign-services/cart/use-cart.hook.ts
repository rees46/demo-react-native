import { useCallback }                           from 'react'
import { useEffect }                             from 'react'
import { useState }                              from 'react'

import { SHOP_ID }                               from '@globals/constants'
import { useApi }                                from '@globals/api-service'
import { useSDK }                                from '@stores/rn-sdk'

import { CartItem }                               from './use-cart.interfaces'

import { UseCart } from './use-cart.interfaces'
import { ProductType } from '@globals/types'

export const useCart: UseCart = ({ navigation }) => {
  const [items, setItems] = useState<ProductType[]>([])
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const sdk = useSDK()
  const { publicApi } = useApi()
  const [error, setError] = useState<Error>()

  const getProductInfo = useCallback(
    async (items: CartItem[]): Promise<ProductType[]> => {
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
              const product: ProductType = response.data
              setTotalPrice((prev) => prev + Number(product.price) * quantity)
              return {
                ...product,
                quantity,
              }
            }))
        const productsArrays: ProductType[] = await Promise.all(requests)

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
    const unsubscribeFocus = navigation.addListener('focus', () => {
      loadCartItems()
    });

    const unsubscribeBlur = navigation.addListener('blur', () => {
      setTotalPrice(0)
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, []);

  const removeCartItem = useCallback((id: string) => {
    setItems(prev => prev.filter(({ uniqid, quantity, price }) => {
      if (uniqid === id) {
        setTotalPrice(prev => prev - quantity! * Number(price))
        return false
      }
      return true
    }))
  }, [])

  return {
    loading,
    items,
    error,
    totalPrice,
    removeCartItem,
  }
}

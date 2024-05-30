import { useCallback } from 'react'
import { useEffect }   from 'react'
import { useState }    from 'react'

import { ProductType } from '@globals/types'
import { useSDK }      from '@stores/rn-sdk'

import { UseCart }      from './use-cart.interfaces'

export const useCart: UseCart = () => {
  const [items, setItems] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const sdk = useSDK()
  const [error, setError] = useState<Error>()

  const loadCartItems = useCallback(async () => {
    if (loading || error) return

    setLoading(true)
    setError(undefined)
    try {
      const { data } = await sdk.cart()

      console.log('cartItems', data)

      setItems((prev) => [...prev, ...data.items])
    } catch (err) {
      console.error('Error loading recommendations:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [loading, sdk, error])

  useEffect(() => {
    loadCartItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    loading,
    items,
    error,
  }
}

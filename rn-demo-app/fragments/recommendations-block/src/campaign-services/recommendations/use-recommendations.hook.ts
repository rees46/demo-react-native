import { useCallback }          from 'react'
import { useMemo } from 'react'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { ProductType }          from '@globals/types'
import { useSDK }               from '@stores/rn-sdk'

import { UseRecommendations }   from './use-recommendations.interfaces'
import { defaultOptions }       from '../../recommendations-block.constants'

export const useRecommendations: UseRecommendations = ({
  recommenderCode,
  options = {},
  infiniteScroll = true,
}) => {
  const [recommendations, setRecommendations] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const sdk = useSDK()
  const [blockTitle, setBlockTitle] = useState('')
  const [initialized, setInitialized] = useState(false)
  const [error, setError] = useState<Error>()
  const [isOver, setIsOver] = useState<boolean>(false)

  const limit = useMemo(
    () => (infiniteScroll ? options?.limit || defaultOptions.limit : undefined),
    [options]
  )

  const loadProducts = useCallback(async () => {
    if (!recommenderCode || loading || error || isOver) return
    if (initialized && (!infiniteScroll || recommendations.length === 0)) return

    setLoading(true)
    setError(undefined)
    try {
      const newRecommendations = await sdk.recommend(recommenderCode, {
        extended: 1,
        ...(infiniteScroll ? defaultOptions : {}),
        ...options,
        limit,
        page: page,
      })

      setRecommendations((prev) => [...prev, ...(newRecommendations.recommends ?? [])])
      !initialized && setBlockTitle(newRecommendations.title)
      !initialized && setInitialized(true)
      setPage((prevPage) => prevPage + 1)

      if (!newRecommendations.recommends || !limit || newRecommendations.recommends.length < limit)
        setIsOver(true)
    } catch (err) {
      console.error('Error loading recommendations:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [loading, sdk, recommenderCode, page, error, initialized])

  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return initialized && recommendations.length > 0
    ? {
        loading,
        recommendations,
        blockTitle,
        loadRecommendations: loadProducts,
        error,
        isOver,
      }
    : {}
}

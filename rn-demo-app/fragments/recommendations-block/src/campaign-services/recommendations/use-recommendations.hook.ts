import { ProductType }         from '@globals/types'

import { useCallback }        from 'react'
import { useEffect }          from 'react'
import { useState }           from 'react'

import { useSDK }             from '@stores/rn-sdk'

import { UseRecommendations } from './use-recommendations.interfaces'
import { defaultOptions }     from '../../recommendations-block.constants'

export const useRecommendations: UseRecommendations = ({ recommenderCode, options = {} }) => {
  const [recommendations, setRecommendations] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const sdk = useSDK()
  const [blockTitle, setBlockTitle] = useState('')
  const [initialized, setInitialized] = useState(false)
  const [error, setError] = useState<Error>()

  const loadRecommendations = useCallback(async () => {
    if (!recommenderCode || loading || error) return

    setLoading(true)
    setError(undefined)
    try {
      const newRecommendations = await sdk.recommend(recommenderCode, {
        ...defaultOptions,
        ...options,
        page,
      })

      !initialized && setBlockTitle(newRecommendations.title)

      setRecommendations((prev) => [...prev, ...newRecommendations.recommends])
      setPage((prevPage) => prevPage + 1)
      setInitialized(true)
    } catch (err) {
      console.error('Error loading recommendations:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [loading, sdk, recommenderCode, page, error, initialized])

  useEffect(() => {
    if (!loading && !initialized) {
      loadRecommendations()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, initialized])

  return {
    loading,
    recommendations,
    blockTitle,
    loadRecommendations,
    error,
  }
}

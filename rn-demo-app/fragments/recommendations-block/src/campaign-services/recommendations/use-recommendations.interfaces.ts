import { ProductType }        from '@globals/types'

import { RecommenderOptions } from '../../recommendations-block.interfaces'

export interface UseRecommendationsProps {
  recommenderCode?: string
  options?: RecommenderOptions
  infiniteScroll?: boolean
}

export interface UseRecommendationsReturnedType {
  loading?: boolean
  recommendations?: ProductType[]
  blockTitle?: string
  loadRecommendations?: VoidFunction
  error?: Error
}

export type UseRecommendations = (props: UseRecommendationsProps) => UseRecommendationsReturnedType

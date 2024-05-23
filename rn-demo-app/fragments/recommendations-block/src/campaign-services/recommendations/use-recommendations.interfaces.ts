import { ProductType } from '@globals/types'

export interface UseRecommendationsProps {
  recommenderCode: string
}

export interface UseRecommendationsReturnedType {
  loading: boolean
  recommendations: ProductType[]
  blockTitle: string
  loadRecommendations: () => void
  error?: Error
}

export type UseRecommendations = (props: UseRecommendationsProps) => UseRecommendationsReturnedType

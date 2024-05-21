import { RecommendationsBlockType } from '../../recommendations-block.interfaces'

export interface UseRecommendationsProps {
  recommenderCode: string
}

export interface UseRecommendationsReturnedType {
  loading: boolean
  recommendations: RecommendationsBlockType[]
  blockTitle: string
  loadRecommendations: () => void
  error?: Error
}

export type UseRecommendations = (props: UseRecommendationsProps) => UseRecommendationsReturnedType

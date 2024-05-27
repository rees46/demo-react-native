import { ProductType } from '@globals/types'
import {RecommenderOptions} from "../../recommendations-block.interfaces";

export interface UseRecommendationsProps {
  recommenderCode?: string
  options?: RecommenderOptions
}

export interface UseRecommendationsReturnedType {
  loading: boolean
  recommendations: ProductType[]
  blockTitle: string
  loadRecommendations: () => void
  error?: Error
}

export type UseRecommendations = (props: UseRecommendationsProps) => UseRecommendationsReturnedType

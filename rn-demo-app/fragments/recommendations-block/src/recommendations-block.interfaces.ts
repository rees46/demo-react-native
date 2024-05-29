export interface RecommendationsBlockProps {
  recommenderCode: string
  navigation: any
  titleVariant?: 'smallTitle' | 'title'
  options?: RecommenderOptions
  infiniteScroll?: boolean
}

export interface RecommenderOptions {
  limit?: number
  extended?: 1 | 0
  resize_image?: number
  prevent_shuffle?: boolean
  item?: string
  category?: string
}

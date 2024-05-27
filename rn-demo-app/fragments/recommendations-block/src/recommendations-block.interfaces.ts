export interface RecommendationsBlockProps {
  recommenderCode: string
  navigation: any
  titleVariant?: 'smallTitle' | 'title'
}

export interface RecommenderOptions {
  limit: number,
  extended?: 1 | 0,
  resize_image?: number,
  prevent_shuffle?: boolean,
}
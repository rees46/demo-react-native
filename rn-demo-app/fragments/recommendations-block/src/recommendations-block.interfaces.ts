export interface RecommendationsBlockType {
  id: string;
  image_url: string;
  name: string;
  price_formatted: string;
}

export interface RecommendationsBlockProps {
  recommenderCode: string;
}

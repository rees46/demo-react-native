import { RecommenderOptions } from './recommendations-block.interfaces'

export const IMAGE_SIZE = 140

export const defaultOptions: RecommenderOptions = {
  limit: 9,
  extended: 1,
  resize_image: IMAGE_SIZE,
  prevent_shuffle: true,
}

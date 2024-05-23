import React           from 'react'

import { ImageElement } from './image.element'
import { ImageProps }   from './image.interfaces'

export const ImageComponent = (props: ImageProps) => {
  return <ImageElement {...props} />
}

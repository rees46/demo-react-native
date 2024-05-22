import React                 from 'react'

import { TextElement }       from './text.element'
import { ExtendedTextProps } from './text.interfaces'

export const TextComponent = ({ children, ...props }: ExtendedTextProps) => {
  return <TextElement {...props}>{children}</TextElement>
}

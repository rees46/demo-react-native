import React             from 'react'

import { SpacerElement } from './spacer.element'
import { SpacerProps }   from './spacer.inerfaces'

export const Spacer = (props: SpacerProps) => {
  return <SpacerElement {...props} />
}

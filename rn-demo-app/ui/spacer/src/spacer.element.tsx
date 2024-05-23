import styled          from '@emotion/native'

import { SpacerProps } from './spacer.inerfaces'

export const SpacerElement = styled.View<SpacerProps>`
  flex-basis: ${(props) => `${props.space ?? 10}px`};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  flex-shrink: 0;
`

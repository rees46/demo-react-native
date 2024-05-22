import styled          from '@emotion/native'

import { SpacerProps } from './spacer.inerfaces'

export const SpacerElement = styled.View<SpacerProps>`
  flex-basis: ${(props) => (props.space ?? 10) + 'px'};
  flex-shrink: 0;
`

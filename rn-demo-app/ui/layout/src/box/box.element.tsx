import styled       from '@emotion/native'

import { BaseBox }  from '../base-box.element'
import { BoxProps } from './box.interfaces'

export const BoxElement = styled(BaseBox)<BoxProps>`
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width ?? '100%'};
  height: ${(props) => props.height ?? 'auto'};
`

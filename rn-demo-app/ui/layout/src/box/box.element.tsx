import styled       from '@emotion/native'

import { BaseBox }  from '../base-box.element'
import { BoxProps } from './box.interfaces'

export const BoxElement = styled(BaseBox)<BoxProps>`
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width ?? (props.fullWidth ? '100%' : 'auto')};
  height: ${(props) => props.height ?? (props.fullHeight ? '100%' : 'auto')};
  border-radius: ${(props) => {
    const value = props.theme.radii[props.radius ?? '']

    if (value && typeof value === 'number') return `${value}px`
    if (value && !value.endsWith('%')) return `${value}px`

    return value
  }};
  border: ${(props) => props.theme.borders[props.border ?? '']};
`

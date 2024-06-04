import styled         from '@emotion/native'

import { InputProps } from './input.interfaces'

export const TextInputElement = styled.TextInput<InputProps>`
  flex: 1;
  font-family: ${(props) => `${props.theme.fontFamily['primary']}`};
  text-align: ${(props) => `${props.variant === 'numeric' ? 'center' : undefined}`};
  font-size: ${(props) =>
    `${props.variant === 'numeric' ? `${props.theme.fontSize.normal}px` : undefined}`};
`

import styled         from '@emotion/native'

import { InputProps } from './input.interfaces'

export const TextInputElement = styled.TextInput<InputProps>`
  flex: 1;
  font-family: ${(props) => `${props.theme.fontFamily['primary']}`};
`

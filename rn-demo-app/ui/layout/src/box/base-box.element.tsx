import styled           from '@emotion/native'

import { BaseBoxProps } from './box.interfaces'

export const BaseBox = styled.View<BaseBoxProps>`
  background-color: ${(props) => props.theme.colors[props.backgroundColor ?? '']};
  flex: ${(props) => props.flex ?? 1};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
`

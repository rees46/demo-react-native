import styled                from '@emotion/native'

import { ExtendedTextProps } from './text.interfaces'

export const TextElement = styled.Text<ExtendedTextProps>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  color: ${(props) => props.theme.colors[props.fontColor ?? ''] ?? props.theme.colors.black};
  font-size: ${(props) =>
    `${props.theme.fontSize[props.fontSize ?? ''] ?? props.theme.fontSize?.normal}px`};
  font-weight: ${(props) =>
    props.theme.fontWeight[props.fontWeight ?? ''] ?? props.theme.fontWeight.regular};
  line-height: ${(props) =>
    `${
      (props.theme.fontSize[props.fontSize ?? ''] ?? props.theme.fontSize?.normal) *
      (props.lineHeight ?? 1.1)
    }px`};
  text-decoration-line: ${(props) => (props.lineTrough ? 'line-through' : undefined)};
`

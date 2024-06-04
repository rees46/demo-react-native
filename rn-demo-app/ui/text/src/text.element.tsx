import styled                from '@emotion/native'

import { ExtendedTextProps } from './text.interfaces'

const getFontFamily = (fontWeight: string | undefined, theme: any): string => {
  switch (fontWeight) {
    case 'medium':
      return theme.fontFamily.medium
    case 'semibold':
      return theme.fontFamily.semiBold
    case 'bold':
      return theme.fontFamily.bold
    default:
      return theme.fontFamily.primary
  }
}

export const TextElement = styled.Text<ExtendedTextProps>`
  font-family: ${(props) => getFontFamily(props.fontWeight, props.theme)};
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

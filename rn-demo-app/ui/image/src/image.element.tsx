import { Dimensions } from 'react-native'

import styled         from '@emotion/native'

import { ImageProps } from './image.interfaces'

const { width } = Dimensions.get('window')

export const ImageElement = styled.Image<ImageProps>`
  width: ${(props) =>
    `${
      props.fullWidth
        ? `${Math.floor(width - (props.horizontalSpace ?? 0))}px`
        : props.width
          ? `${props.width}px`
          : undefined
    }`};
  height: ${(props) =>
    `${
      props.height
        ? `${props.height}px`
        : props.fullWidth
          ? `${Math.floor(width - (props.verticalSpace ?? 0))}px`
          : undefined
    }`};
  background-color: ${(props) =>
    `${props.theme.colors[props.backgroundColor ?? ''] ?? props.theme.colors['white']}`};
`

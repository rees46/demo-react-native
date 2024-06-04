import { ImageProps as BaseImageProps } from 'react-native'

import { ColorType }                    from '@ui/theme'
import { ThemeType }                    from '@ui/theme'

export interface ImageProps extends BaseImageProps {
  theme?: ThemeType
  width?: number
  height?: number
  fullWidth?: boolean
  verticalSpace?: number
  horizontalSpace?: number
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
  backgroundColor?: ColorType
}

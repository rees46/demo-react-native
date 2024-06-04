import { TextProps }      from 'react-native'

import { ColorType }      from '@ui/theme'
import { ThemeType }      from '@ui/theme'
import { FontSizeType }   from '@ui/theme'
import { FontWeightType } from '@ui/theme'

export interface ExtendedTextProps extends TextProps {
  fontSize?: FontSizeType
  fontWeight?: FontWeightType
  fontColor?: ColorType
  children: string
  theme?: ThemeType
  lineHeight?: number
  lineTrough?: boolean
}

import { TextProps }      from 'react-native'

import { ColorsType }     from '@ui/theme'
import { ThemeType }      from '@ui/theme'
import { FontSizeType }   from '@ui/theme'
import { FontWeightType } from '@ui/theme'

export interface ExtendedTextProps extends TextProps {
  fontSize?: FontSizeType
  fontWeight?: FontWeightType
  fontColor?: ColorsType
  children: string
  theme?: ThemeType
}

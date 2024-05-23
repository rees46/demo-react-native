import { ViewProps } from 'react-native'

import { ThemeType } from '@ui/theme'

export interface SpacerProps extends ViewProps {
  theme?: ThemeType
  space?: number
  width?: number
  height?: number
}

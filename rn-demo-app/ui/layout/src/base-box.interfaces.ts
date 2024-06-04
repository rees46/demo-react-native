import { ReactNode } from 'react'
import { ViewProps } from 'react-native'

import { ColorType } from '@ui/theme'
import { ThemeType } from '@ui/theme'

export interface BaseBoxProps extends ViewProps {
  children?: ReactNode
  theme?: ThemeType
  backgroundColor?: ColorType
  flex?: number
  gap?: number
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  overflow?: 'hidden' | 'auto'
}

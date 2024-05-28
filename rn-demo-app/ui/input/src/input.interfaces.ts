import { TextInputProps } from 'react-native'

import { ThemeType }      from '@ui/theme'

export interface InputProps extends Omit<TextInputProps, 'value'> {
  theme?: ThemeType
  height?: number
  clearable?: boolean
  value: string
  variant?: 'text' | 'numeric'
  min?: number
  max?: number
}

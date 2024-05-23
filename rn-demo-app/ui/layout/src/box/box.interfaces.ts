import { BorderType }   from '@ui/theme'
import { RadiusType }   from '@ui/theme'

import { BaseBoxProps } from '../base-box.interfaces'

export interface BoxProps extends BaseBoxProps {
  flexDirection?: 'row' | 'column'
  width?: number | string
  height?: number | string
  radius?: RadiusType
  fullWidth?: boolean
  fullHeight?: boolean
  border?: BorderType
}

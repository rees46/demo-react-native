import { BaseBoxProps } from '../base-box.interfaces'

export interface BoxProps extends BaseBoxProps {
  flexDirection?: 'row' | 'column'
  width?: number | string
  height?: number | string
}

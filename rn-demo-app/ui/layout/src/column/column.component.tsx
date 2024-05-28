import React             from 'react'

import { BaseBoxProps }  from '../base-box.interfaces'
import { ColumnElement } from './column.element'

export const Column = ({ children, ...props }: BaseBoxProps) => {
  return <ColumnElement {...props}>{children}</ColumnElement>
}

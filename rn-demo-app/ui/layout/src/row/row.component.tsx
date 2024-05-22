import React           from 'react'

import { BaseBoxProps } from '../base-box.interfaces'
import { RowElement }  from './row.element'

export const Row = ({ children, ...props }: BaseBoxProps) => {
  return <RowElement {...props}>{children}</RowElement>
}

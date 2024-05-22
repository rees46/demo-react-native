import React           from 'react'

import { BaseBoxProps } from '../box/box.interfaces'
import { RowElement }  from './row.element'

export const Row = ({ children, ...props }: BaseBoxProps) => {
  return <RowElement {...props}>{children}</RowElement>
}

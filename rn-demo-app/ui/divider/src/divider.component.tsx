import React           from 'react'

import { memo }  from 'react'

import { Box }         from '@ui/layout'

import { DividerProps } from './divider.interfaces'

export const Divider = memo(({
  height = 1,
  fullWidth = true,
  backgroundColor = 'lightGray',
  ...props
}: DividerProps) => (
  <Box height={height} fullWidth={fullWidth} backgroundColor={backgroundColor} {...props} />
))

import React, {memo} from 'react'
import {DividerProps} from "./divider.interfaces";
import { Box } from '@ui/layout';

export const Divider = memo(({ height = 1, fullWidth = true, backgroundColor= 'lightGray', ...props }: DividerProps) => (
  <Box height={height} fullWidth={fullWidth} backgroundColor={backgroundColor} {...props} />
))
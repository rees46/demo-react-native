import styled           from '@emotion/native'

import { BaseBox }      from '../box/base-box.element'
import { BaseBoxProps } from '../box/box.interfaces'

export const ColumnElement = styled(BaseBox)<BaseBoxProps>`
  flex-direction: column;
`

import { Dimensions }               from 'react-native'

import { TAB_BAR_HEIGHT }           from '@globals/constants'
import { APP_HEADER_HEIGHT_MEDIUM } from '@globals/constants'

import { SEARCH_HEIGHT }            from '../product-search.constants'

const { height } = Dimensions.get('window')

const contentVerticalPadding = 16

export const getSearchContentHeight = (keyboardHeight: number) =>
  height -
  TAB_BAR_HEIGHT -
  APP_HEADER_HEIGHT_MEDIUM -
  SEARCH_HEIGHT -
  contentVerticalPadding * 2 -
  keyboardHeight

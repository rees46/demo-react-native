import { Dimensions }                                       from 'react-native'

import { SEARCH_HEIGHT }                                    from '../product-search.constants'

import { TAB_BAR_HEIGHT }                    from '../product-search.constants'

import { TAB_HEADER_HEIGHT } from '../product-search.constants'

const { height } = Dimensions.get('window')

const contentVerticalPadding = 12

export const getSearchContentHeight = (keyboardHeight: number) =>
  height -
  TAB_BAR_HEIGHT -
  TAB_HEADER_HEIGHT -
  keyboardHeight -
  SEARCH_HEIGHT -
  contentVerticalPadding * 2

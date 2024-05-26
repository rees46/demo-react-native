import { Dimensions }               from 'react-native'

import { TAB_BAR_HEIGHT }           from '@globals/constants'
import { APP_HEADER_HEIGHT_MEDIUM } from '@globals/constants'
import { SCREEN_HEADER_HEIGHT }     from '@globals/constants'

const { height } = Dimensions.get('window')

export const getListHeight = () =>
  height - SCREEN_HEADER_HEIGHT - TAB_BAR_HEIGHT - APP_HEADER_HEIGHT_MEDIUM

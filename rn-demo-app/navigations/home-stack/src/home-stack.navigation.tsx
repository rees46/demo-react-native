import React                  from 'react'

import { APP_ROUTES }         from '@navigations/constants'
import { ScreenStack }        from '@navigations/screen-stack-framgent'

import { HOME_STACK_OPTIONS } from './home-stack.constants'

export default () => (
  <ScreenStack groupName={APP_ROUTES.HOME.groupName} screens={HOME_STACK_OPTIONS} />
)

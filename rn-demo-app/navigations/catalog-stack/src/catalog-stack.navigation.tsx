import React                     from 'react'

import { APP_ROUTES }            from '@navigations/constants'
import { ScreenStack }           from '@navigations/screen-stack-framgent'

import { CATALOG_STACK_OPTIONS } from './catalog-stack.constants'

export default () => (
  <ScreenStack groupName={APP_ROUTES.CATALOG.groupName} screens={CATALOG_STACK_OPTIONS} />
)

import React                     from 'react'

import { APP_ROUTES }            from '@navigations/constants'
import { ScreenStack }           from '@navigations/screen-stack-framgent'

import { CART_STACK_OPTIONS } from './cart-stack.constants'

export default () => (
  <ScreenStack groupName={APP_ROUTES.CART.groupName} screens={CART_STACK_OPTIONS} />
)

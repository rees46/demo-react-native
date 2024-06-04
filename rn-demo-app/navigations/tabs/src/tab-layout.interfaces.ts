import { ComponentType } from 'react'

import { APP_ROUTES }    from '@navigations/constants'

export interface ScreenOptions {
  name: string
  title: string
  component: ComponentType<any>
  focusedIconName: 'home' | 'folder' | 'cart' | 'people'
  unfocusedIconName: 'home-outline' | 'folder-outline' | 'cart-outline' | 'people-outline'
}

export type TabParamList = {
  [APP_ROUTES.HOME.tabName]: undefined
  [APP_ROUTES.CATALOG.tabName]: undefined
  [APP_ROUTES.CART.tabName]: undefined
}

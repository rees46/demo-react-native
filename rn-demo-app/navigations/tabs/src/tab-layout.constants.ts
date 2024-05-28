import CatalogStack      from '@navigations/catalog-stack'
import HomeStack         from '@navigations/home-stack'
import CartScreen        from '@screens/cart'
import { APP_ROUTES }    from '@navigations/constants'

import { ScreenOptions } from './tab-layout.interfaces'

export const SCREEN_OPTIONS: ScreenOptions[] = [
  {
    name: APP_ROUTES.HOME.tabName,
    title: 'home',
    component: HomeStack,
    focusedIconName: 'home',
    unfocusedIconName: 'home-outline',
  },
  {
    name: APP_ROUTES.CATALOG.tabName,
    title: 'catalog',
    component: CatalogStack,
    focusedIconName: 'folder',
    unfocusedIconName: 'folder-outline',
  },
  {
    name: APP_ROUTES.CART.tabName,
    title: 'cart',
    component: CartScreen,
    focusedIconName: 'cart',
    unfocusedIconName: 'cart-outline',
  },
]

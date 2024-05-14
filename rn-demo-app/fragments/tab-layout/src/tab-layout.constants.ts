import {ScreenOptions} from './tab-layout.interfaces.ts';
import HomeScreen from '../../../screens/home';
import CatalogScreen from '../../../screens/catalog';
import CartScreen from '../../../screens/cart';
import ProfileScreen from '../../../screens/profile/src';

export const screenOptions: ScreenOptions[] = [
  {
    name: 'Home',
    component: HomeScreen,
    focusedIconName: 'home',
    unfocusedIconName: 'home-outline',
  },
  {
    name: 'Catalog',
    component: CatalogScreen,
    focusedIconName: 'filter',
    unfocusedIconName: 'filter-outline',
  },
  {
    name: 'Cart',
    component: CartScreen,
    focusedIconName: 'cart',
    unfocusedIconName: 'cart-outline',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    focusedIconName: 'people',
    unfocusedIconName: 'people-outline',
  },
];

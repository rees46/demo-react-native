import { ScreenOptions } from "./tab-layout.interfaces";
import HomeStack from '@navigations/home-stack'
import ProfileScreen from "@screens/profile";
import CartScreen from "@screens/cart";
import CatalogScreen from "@screens/catalog";
import {appRoutes} from '@navigations/constants'

export const screenOptions: ScreenOptions[] = [
  {
    name: appRoutes.Home.tabName,
    title: 'home',
    component: HomeStack,
    focusedIconName: "home",
    unfocusedIconName: "home-outline",
  },
  {
    name: appRoutes.Catalog.tabName,
    title: "catalog",
    component: CatalogScreen,
    focusedIconName: "list",
    unfocusedIconName: "list-outline",
  },
  {
    name: appRoutes.Cart.tabName,
    title: "cart",
    component: CartScreen,
    focusedIconName: "cart",
    unfocusedIconName: "cart-outline",
  },
  {
    name: appRoutes.Profile.tabName,
    title: 'profile',
    component: ProfileScreen,
    focusedIconName: "people",
    unfocusedIconName: "people-outline",
  },
];

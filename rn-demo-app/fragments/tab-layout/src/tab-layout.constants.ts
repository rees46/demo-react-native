import { ScreenOptions } from "./tab-layout.interfaces";
import HomeScreen from "@screens/home";
import ProfileScreen from "@screens/profile";
import CartScreen from "@screens/cart";
import CatalogScreen from "@screens/catalog";

export const screenOptions: ScreenOptions[] = [
  {
    name: "home",
    component: HomeScreen,
    focusedIconName: "home",
    unfocusedIconName: "home-outline",
  },
  {
    name: "catalog",
    component: CatalogScreen,
    focusedIconName: "list",
    unfocusedIconName: "list-outline",
  },
  {
    name: "cart",
    component: CartScreen,
    focusedIconName: "cart",
    unfocusedIconName: "cart-outline",
  },
  {
    name: "profile",
    component: ProfileScreen,
    focusedIconName: "people",
    unfocusedIconName: "people-outline",
  },
];

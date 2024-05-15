import { ScreenOptions } from "./tab-layout.interfaces";
import HomeScreen from "@screens/home";
import ProfileScreen from "@screens/profile";
import CartScreen from "@screens/cart";
import CatalogScreen from "@screens/catalog";

export const screenOptions: ScreenOptions[] = [
  {
    name: "Home",
    component: HomeScreen,
    focusedIconName: "home",
    unfocusedIconName: "home-outline",
  },
  {
    name: "Catalog",
    component: CatalogScreen,
    focusedIconName: "list",
    unfocusedIconName: "list-outline",
  },
  {
    name: "Cart",
    component: CartScreen,
    focusedIconName: "cart",
    unfocusedIconName: "cart-outline",
  },
  {
    name: "Profile",
    component: ProfileScreen,
    focusedIconName: "people",
    unfocusedIconName: "people-outline",
  },
];

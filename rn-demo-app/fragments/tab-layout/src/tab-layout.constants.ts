import { ScreenOptions } from "./tab-layout.interfaces.ts";
import HomeScreen from "@screens/home";

export const screenOptions: ScreenOptions[] = [
  {
    name: "Home",
    component: HomeScreen,
    focusedIconName: "home",
    unfocusedIconName: "home-outline",
  },
  {
    name: "Catalog",
    component: HomeScreen,
    focusedIconName: "filter",
    unfocusedIconName: "filter-outline",
  },
  {
    name: "Cart",
    component: HomeScreen,
    focusedIconName: "cart",
    unfocusedIconName: "cart-outline",
  },
  {
    name: "Profile",
    component: HomeScreen,
    focusedIconName: "people",
    unfocusedIconName: "people-outline",
  },
];

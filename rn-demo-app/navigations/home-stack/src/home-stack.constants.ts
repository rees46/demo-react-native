import HomeScreen from "@screens/home";
import ProductScreen from "@screens/product";
import ProductSearchStack from "@navigations/product-search-stack";
import { appRoutes } from "@navigations/constants";

export const homeStackParams = [
  {
    name: appRoutes.Home.name,
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: appRoutes.ProductSearch.name,
    component: ProductSearchStack,
    options: {
      headerShown: false,
    },
  },
  {
    name: appRoutes.Product.name,
    component: ProductScreen,
  },
];

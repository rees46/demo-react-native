import HomeScreen from '@screens/home';
import ProductScreen from '@screens/product';
import { appRoutes } from '@navigations/constants';
import CategoryScreen from '@screens/category';
import ProductSearchScreen from '@screens/product-search';

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
    component: ProductSearchScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: appRoutes.Product.name,
    component: ProductScreen,
  },
  {
    name: appRoutes.Category.name,
    component: CategoryScreen,
  },
];

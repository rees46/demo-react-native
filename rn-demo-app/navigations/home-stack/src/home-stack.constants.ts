import HomeScreen from '@screens/home';
import ProductScreen from '@screens/product';
import CategoryScreen from '@screens/category';
import { appRoutes } from '@navigations/constants';

export const homeStackParams = [
  {
    name: appRoutes.Home.name,
    component: HomeScreen,
    options: {
      headerShown: false,
    }
  },
  {
    name: appRoutes.Category.name,
    component: CategoryScreen,
  },
  {
    name: appRoutes.Product.name,
    component: ProductScreen,
  },
]
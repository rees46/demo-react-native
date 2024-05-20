import ProductScreen from '@screens/product';
import CategoryScreen from '@screens/category';
import ProductSearchScreen from '@screens/product-search'
import { appRoutes } from '@navigations/constants';

export const productSearchStackParams = [
  {
    name: appRoutes.ProductSearch.groupName,
    component: ProductSearchScreen,
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
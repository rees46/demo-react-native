import CategoryScreen      from '@screens/category'
import HomeScreen          from '@screens/home'
import ProductScreen       from '@screens/product'
import ProductSearchScreen from '@screens/product-search'
import { APP_ROUTES }      from '@navigations/constants'

export const HOME_STACK_OPTIONS = [
  {
    name: APP_ROUTES.HOME.name,
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: APP_ROUTES.PRODUCT_SEARCH.name,
    component: ProductSearchScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: APP_ROUTES.PRODUCT.name,
    component: ProductScreen,
  },
  {
    name: APP_ROUTES.CATEGORY.name,
    component: CategoryScreen,
  },
]

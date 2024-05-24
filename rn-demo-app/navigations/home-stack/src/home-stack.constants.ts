import SearchResultsScreen from '@screens/search-results'

import CartScreen          from '@screens/cart'
import CatalogScreen       from '@screens/catalog'
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
    name: APP_ROUTES.CART.name,
    component: CartScreen,
  },
  {
    name: APP_ROUTES.CATALOG.name,
    component: CatalogScreen,
  },
  {
    name: APP_ROUTES.PRODUCT_SEARCH.name,
    component: ProductSearchScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: APP_ROUTES.SEARCH_RESULTS.name,
    component: SearchResultsScreen,
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

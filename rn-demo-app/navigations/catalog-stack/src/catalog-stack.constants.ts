import CartScreen          from '@screens/cart'
import CatalogScreen       from '@screens/catalog'
import CategoryScreen      from '@screens/category'
import HomeScreen          from '@screens/home'
import ProductScreen       from '@screens/product'
import ProductSearchScreen from '@screens/product-search'
import SearchResultsScreen from '@screens/search-results'
import RecommendationProductsScreen from '@screens/recommendation-products'
import SubcategoriesScreen from '@screens/subcategories'
import { APP_ROUTES }      from '@navigations/constants'

export const CATALOG_STACK_OPTIONS = [
  {
    name: APP_ROUTES.CATALOG.name,
    component: CatalogScreen,
    options: {
      headerShown: false,
    },
  },
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
    name: APP_ROUTES.SUBCATEGORIES.name,
    component: SubcategoriesScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: APP_ROUTES.RECOMMENDATION_PRODUCTS.name,
    component: RecommendationProductsScreen,
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

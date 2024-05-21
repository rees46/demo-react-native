export const appRoutes = {
  Home: {
    name: 'Home',
    tabName: 'HomeTab',
    groupName: 'HomeStack',
  },
  Catalog: {
    name: 'Catalog',
    tabName: 'CatalogTab',
    groupName: 'CatalogStack',
  },
  Cart: {
    name: 'Cart',
    tabName: 'CartTab',
    groupName: 'CartStack',
  },
  Profile: {
    name: 'Profile',
    tabName: 'ProfileTab',
    groupName: 'ProfileStack',
  },
  Category: {
    name: 'Category',
  },
  Product: {
    name: 'Product',
  },
  ProductSearch: {
    name: 'ProductSearch',
  },
} as const;

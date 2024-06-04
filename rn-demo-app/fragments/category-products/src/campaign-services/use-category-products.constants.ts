import { SHOP_ID }                 from '@globals/constants'

import { CategoryProductsOptions } from './use-category-products.interfaces'

export const defaultOptions: CategoryProductsOptions = {
  limit: 8,
  shop_id: SHOP_ID,
}

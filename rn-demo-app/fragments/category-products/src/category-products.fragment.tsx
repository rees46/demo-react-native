import React                     from 'react'

import { ProductList }           from '@fragments/product-list'

import { CategoryProductsProps } from './category-products.interfaces'
import { useCategoryProduct }    from './campaign-services/use-category-products.hook'

export const CategoryProducts = ({ navigation, categoryId }: CategoryProductsProps) => {
  const { loadProducts, products, total } = useCategoryProduct({ categoryId })

  return (
    <ProductList
      products={products}
      navigation={navigation}
      onLoad={loadProducts}
      isOver={!!total && total === products.length + 1}
    />
  )
}

import React                  from 'react'

import { ProductSearch }      from '@fragments/product-search'
import { Box }                from '@ui/layout'

import { ProductSearchProps } from './product-search.interfaces'

const ProductSearchScreen = ({ navigation }: ProductSearchProps) => (
  <Box backgroundColor='white' fullHeight flex={1}>
    <ProductSearch navigation={navigation} />
  </Box>
)

export default ProductSearchScreen

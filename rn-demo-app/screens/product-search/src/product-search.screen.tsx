import React             from 'react'

import { ProductSearch } from '@fragments/product-search'

const ProductSearchScreen = ({ navigation }) => (
  <ProductSearch navigation={navigation} viewOnly={false} />
)

export default ProductSearchScreen

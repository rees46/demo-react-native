import { ProductInfo }  from '@fragments/product-info'

import React            from 'react'

import { ScreenLayout } from '@fragments/screen-layout'

const ProductScreen = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <ScreenLayout navigation={navigation}>
      <ProductInfo id={id} />
    </ScreenLayout>
  )
}

export default ProductScreen

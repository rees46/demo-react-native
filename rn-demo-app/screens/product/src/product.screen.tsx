import React                    from 'react'

import { ProductInfo }          from '@fragments/product-info'
import { RecommendationsBlock } from '@fragments/recommendations-block'
import { ScreenLayout }         from '@fragments/screen-layout'
import { Spacer }               from '@ui/spacer'

import { ProductProps }         from './product.interfaces'

const ProductScreen = ({ navigation, route }: ProductProps) => {
  const { id } = route.params

  return (
    <ScreenLayout navigation={navigation} menuVariant='menu'>
      <ProductInfo id={id} />
      <Spacer height={16} />
      <RecommendationsBlock
        navigation={navigation}
        // TODO: replace by necessary recommender
        recommenderCode='88bbdbe3f9ea5e45dbc5be70738bdf28'
        titleVariant='title'
        options={{ item: id }}
        infiniteScroll={false}
      />
      <Spacer height={16} />
    </ScreenLayout>
  )
}

export default ProductScreen

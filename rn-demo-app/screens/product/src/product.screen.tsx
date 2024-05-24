import React                    from 'react'

import { ProductInfo }          from '@fragments/product-info'
import { RecommendationsBlock } from '@fragments/recommendations-block'
import { ScreenLayout }         from '@fragments/screen-layout'
import { Spacer }               from '@ui/spacer'

const ProductScreen = ({ navigation, route }) => {
  const { id } = route.params

  return (
    <ScreenLayout navigation={navigation}>
      <ProductInfo id={id} />
      <Spacer height={16} />
      <RecommendationsBlock
        navigation={navigation}
        // TODO: add "You also may like" recommender instead of string
        recommenderCode='1efd76c810cc2364ff89677af3e076c7'
        titleVariant='title'
      />
    </ScreenLayout>
  )
}

export default ProductScreen

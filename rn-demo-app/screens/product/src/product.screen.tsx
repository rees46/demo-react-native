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
        recommenderCode='1efd76c810cc2364ff89677af3e076c7'
        titleVariant='title'
      />
      <Spacer height={16} />
    </ScreenLayout>
  )
}

export default ProductScreen

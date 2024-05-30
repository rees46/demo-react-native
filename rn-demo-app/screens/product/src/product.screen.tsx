import React                      from 'react'

import { ProductInfo }            from '@fragments/product-info'
import { RecommendationsBlock }   from '@fragments/recommendations-block'
import { ScreenLayout }           from '@fragments/screen-layout'
import { RECOMMENDATIONS_BLOCKS } from '@globals/constants'
import { Spacer }                 from '@ui/spacer'

import { ProductProps }           from './product.interfaces'

const ProductScreen = ({ navigation, route }: ProductProps) => {
  const { id } = route.params

  return (
    <ScreenLayout navigation={navigation} menuVariant='menu'>
      <ProductInfo id={id} />
      <Spacer height={16} />
      <RecommendationsBlock
        navigation={navigation}
        recommenderCode={RECOMMENDATIONS_BLOCKS.TOP_SALES.code}
        titleVariant='title'
        options={{ item: id }}
        infiniteScroll={RECOMMENDATIONS_BLOCKS.TOP_SALES.oneAlgorithm}
      />
      <Spacer height={16} />
    </ScreenLayout>
  )
}

export default ProductScreen

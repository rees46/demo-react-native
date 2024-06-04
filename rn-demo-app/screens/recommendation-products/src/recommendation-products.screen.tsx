import React                           from 'react'

import { ProductList }                 from '@fragments/product-list'
import { ScreenLayout }                from '@fragments/screen-layout'
import { Spacer }                      from '@ui/spacer'
import { useRecommendations }          from '@fragments/recommendations-block'

import { RecommendationProductsProps } from './recommendation-products.interfaces'

const RecommendationProductsScreen = ({ navigation, route }: RecommendationProductsProps) => {
  const { recommenderCode } = route.params

  const {
    recommendations = [],
    loadRecommendations,
    isOver,
  } = useRecommendations({
    recommenderCode,
    options: {
      limit: 8,
    },
  })

  return (
    <ScreenLayout
      navigation={navigation}
      scrollable={false}
      menuVariant='navigation'
      navigationIconName='back'
    >
      <Spacer height={16} />
      <ProductList
        products={recommendations}
        navigation={navigation}
        onLoad={loadRecommendations}
        isOver={isOver}
      />
    </ScreenLayout>
  )
}

export default RecommendationProductsScreen

import React                    from 'react'

import { ScreenLayout }         from '@fragments/screen-layout'
import { Spacer }               from '@ui/spacer'

import {RecommendationProductsProps} from "./recommendation-products.interfaces";
import { ProductList } from '@fragments/product-list';
import { useRecommendations } from '@fragments/recommendations-block';

const RecommendationProductsScreen = ({ navigation, route }: RecommendationProductsProps) => {
  const { recommenderCode } = route.params

  const {recommendations, loadRecommendations, loading} = useRecommendations({
    recommenderCode,
    options: {
      limit: 8,
      extended: 1,
      prevent_shuffle: true
    }
  })

  return (
    <ScreenLayout navigation={navigation} scrollable={false} menuVariant='navigation' navigationIconName='back'>
      <Spacer height={16} />
      <ProductList products={recommendations} navigation={navigation} onLoad={loadRecommendations} />
    </ScreenLayout>
  )
}

export default RecommendationProductsScreen

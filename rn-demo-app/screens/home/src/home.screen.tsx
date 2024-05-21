import React                    from 'react'
import { ScrollView }           from 'react-native'
import { useEffect }            from 'react'

import { ProductSearch }        from '@fragments/product-search'
import { RecommendationsBlock } from '@fragments/recommendations-block'
import { useSDK }               from '@stores/rn-sdk'

import { RECOMMENDER_CODES }    from './home.constants'
import { styles }               from './home.styles'

const HomeScreen = ({ navigation }) => {
  const sdk = useSDK()

  useEffect(() => {
    sdk.track('wish', [])
  }, [sdk])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProductSearch navigation={navigation} viewOnly />
      {RECOMMENDER_CODES.map((code) => (
        <RecommendationsBlock recommenderCode={code} key={code} />
      ))}
    </ScrollView>
  )
}

export default HomeScreen

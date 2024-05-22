import { ScreenLayout }         from '@fragments/screen-layout'

import React                    from 'react'
import { ScrollView }           from 'react-native'
import { useEffect }            from 'react'

import { RecommendationsBlock } from '@fragments/recommendations-block'
import { useSDK }               from '@stores/rn-sdk'

import { RECOMMENDER_CODES }    from './home.constants'

const HomeScreen = ({ navigation }) => {
  const sdk = useSDK()

  useEffect(() => {
    sdk.track('wish', [])
  }, [sdk])

  return (
    <ScreenLayout navigation={navigation}>
      <ScrollView>
        {RECOMMENDER_CODES.map((code) => (
          <RecommendationsBlock recommenderCode={code} key={code} />
        ))}
      </ScrollView>
    </ScreenLayout>
  )
}

export default HomeScreen

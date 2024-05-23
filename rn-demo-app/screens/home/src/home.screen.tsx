import React                    from 'react'
import { Fragment }             from 'react'
import { ScrollView }           from 'react-native'
import { useEffect }            from 'react'

import { RecommendationsBlock } from '@fragments/recommendations-block'
import { ScreenLayout }         from '@fragments/screen-layout'
import { Condition }            from '@ui/condition'
import { Spacer }               from '@ui/spacer'
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
        <Spacer height={16} />
        {RECOMMENDER_CODES.map((code, index) => (
          <Fragment key={code}>
            <Condition condition={!!index}>
              <Spacer height={16} />
            </Condition>
            <RecommendationsBlock recommenderCode={code} />
          </Fragment>
        ))}
      </ScrollView>
    </ScreenLayout>
  )
}

export default HomeScreen

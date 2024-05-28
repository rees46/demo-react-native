import React              from 'react'
import { Text }           from 'react-native'
import { View }           from 'react-native'
import { useEffect }      from 'react'
import { useTranslation } from 'react-i18next'

import { useSDK }         from '@stores/rn-sdk'

import { styles }         from './category.styles'

const CategoryScreen = () => {
  const sdk = useSDK()
  const { t } = useTranslation()

  useEffect(() => {
    sdk.track('wish', [])
  }, [sdk])

  return (
    <View style={styles.container}>
      <Text>{t('screens.category.title')}</Text>
    </View>
  )
}

export default CategoryScreen

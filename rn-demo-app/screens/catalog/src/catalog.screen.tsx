import React                from 'react'
import { useEffect } from 'react'
import { Text }             from 'react-native'
import { View }       from 'react-native'
import { useTranslation }   from 'react-i18next'

import { useSDK }           from '@stores/rn-sdk'

import { styles }           from './catalog.styles'

const CatalogScreen = () => {
  const sdk = useSDK()
  const { t } = useTranslation()

  useEffect(() => {
    sdk.track('wish', [])
  }, [sdk])

  return (
    <View style={styles.container}>
      <Text>{t('screens.catalog.title')}</Text>
    </View>
  )
}

export default CatalogScreen

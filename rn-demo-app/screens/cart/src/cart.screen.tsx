import React              from 'react'
import { Text }           from 'react-native'
import { View }           from 'react-native'
import { useEffect }      from 'react'
import { useTranslation } from 'react-i18next'

import { useSDK }         from '@stores/rn-sdk'

import { styles }         from './cart.styles'

const CartScreen = () => {
  const sdk = useSDK()
  const { t } = useTranslation()

  useEffect(() => {
    sdk.track('wish', [])
  }, [sdk])

  return (
    <View style={styles.container}>
      <Text>{t('screens.cart.title')}</Text>
    </View>
  )
}

export default CartScreen

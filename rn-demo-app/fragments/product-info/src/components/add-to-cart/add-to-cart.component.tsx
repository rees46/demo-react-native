import React                 from 'react'
import { useCallback } from 'react'
import { TextInput }         from 'react-native'
import { useRef }            from 'react'
import { useState }          from 'react'
import { memo }              from 'react'
import { useTranslation }    from 'react-i18next'

import { ButtonComponent }   from '@ui/button'
import { Input }             from '@ui/input'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Spacer }            from '@ui/spacer'
import { useSDK }            from '@stores/rn-sdk'

import { AddToCartProps }     from './add-to-cart.interfaces'

export const AddToCart = memo(({ productId, max }: AddToCartProps) => {
  const [count, setCount] = useState('1')
  const { t } = useTranslation()
  const inputRef = useRef<TextInput>(null)
  const sdk = useSDK()

  const handleAddToCardPress = useCallback(() => {
    if (Number(count) > 0 && Number(count) <= (max ?? Infinity)) {
      sdk.track('cart', {
        id: productId,
        quantity: count,
      })
    }
  }, [count, sdk])

  return (
    <Row>
      <Spacer space={14} />
      <Input ref={inputRef} value={count} onChangeText={setCount} variant='numeric' max={max} />
      <Spacer space={16} />
      <Box width={200}>
        <ButtonComponent
          variant='primary'
          title={t('fragments.product-info.add-to-cart')}
          onPress={handleAddToCardPress}
          height={44}
        />
      </Box>
      <Spacer space={16} />
    </Row>
  )
})

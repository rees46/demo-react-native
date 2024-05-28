import React                      from 'react'
import { useRef }           from 'react'
import { useState } from 'react'
import { TextInput }               from 'react-native'
import { memo }                   from 'react'
import { useTranslation }          from 'react-i18next'

import { ButtonComponent }        from '@ui/button'
import { Input }                  from '@ui/input'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Spacer }                 from '@ui/spacer'

export const AddToCart = memo(() => {
  const [count, setCount] = useState('0')
  const { t } = useTranslation()
  const inputRef = useRef<TextInput>(null)

  return (
    <Row>
      <Spacer space={14} />
      <Input ref={inputRef} value={count} onChangeText={setCount} variant='numeric' />
      <Spacer space={16} />
      <Box width={200}>
        <ButtonComponent
          variant='primary'
          title={t('fragments.product-info.add-to-cart')}
          height={44}
        />
      </Box>
      <Spacer space={16} />
    </Row>
  )
})

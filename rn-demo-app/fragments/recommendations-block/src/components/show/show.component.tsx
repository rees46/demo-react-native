import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { useCallback }      from 'react'
import { useTranslation }   from 'react-i18next'

import { Row }              from '@ui/layout'
import { TextComponent }    from '@ui/text'

export const Show = () => {
  const { t } = useTranslation()

  const handlePress = useCallback(() => {
    //
  }, [])

  return (
    <TouchableOpacity onPress={handlePress}>
      <Row alignItems='flex-end'>
        <TextComponent fontSize='semi' fontWeight='medium' lineHeight={1} fontColor='gray'>
          {t('fragments.recommendations-block.show')}
        </TextComponent>
        <Icon name='chevron-forward' size={14} />
      </Row>
    </TouchableOpacity>
  )
}

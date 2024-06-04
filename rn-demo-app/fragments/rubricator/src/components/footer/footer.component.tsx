import React              from 'react'
import Icon               from 'react-native-vector-icons/Ionicons'
import { memo }           from 'react'
import { useTranslation } from 'react-i18next'

import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Spacer }         from '@ui/spacer'
import { TextComponent }  from '@ui/text'
import { useTheme }       from '@ui/theme'

// import { FOOTER_HEIGHT }  from '../../rubricator.constants'

export const FooterComponent = memo(() => {
  const theme = useTheme()
  const { t } = useTranslation()

  return (
    <Box
      backgroundColor='lightGray'
      // height={FOOTER_HEIGHT}
      justifyContent='center'
    >
      <Row>
        <Spacer space={16} />
        <Row justifyContent='space-between' alignItems='center'>
          <Row alignItems='center'>
            <Icon name='cart-outline' size={24} color={theme.colors.gray} />
            <Spacer space={8} />
            <TextComponent fontSize='big' fontWeight='medium' fontColor='black'>
              {t('screens.catalog.shopping-cart')}
            </TextComponent>
          </Row>
        </Row>
        <Spacer space={16} />
      </Row>
    </Box>
  )
})

import React                      from 'react'
import { useTranslation }         from 'react-i18next'

import { RecommendationsBlock }   from '@fragments/recommendations-block'
import { RECOMMENDATIONS_BLOCKS } from '@globals/constants'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Spacer }                 from '@ui/spacer'
import { TextComponent }          from '@ui/text'

import { CartLayoutProps }        from './cart-layout.interfaces'

export const CartBlockLayout = ({ navigation, children }: CartLayoutProps) => {
  const { t } = useTranslation()

  return (
    <Box justifyContent='space-between' flex={1}>
      <Row flex={1}>
        <Column flex={1}>
          <Row>
            <Spacer space={16} />
            <TextComponent fontSize='bigTitle' fontColor='black' fontWeight='semibold'>
              {t('screens.cart.shopping-cart')}
            </TextComponent>
            <Spacer space={16} />
          </Row>
          <Spacer height={16} />
          {children}
          <Spacer height={16} />
        </Column>
      </Row>
      <RecommendationsBlock
        navigation={navigation}
        recommenderCode={RECOMMENDATIONS_BLOCKS.ALSO_BUY.code}
        titleVariant='title'
        infiniteScroll={RECOMMENDATIONS_BLOCKS.ALSO_BUY.oneAlgorithm}
      />
      <Spacer height={16} />
    </Box>
  )
}

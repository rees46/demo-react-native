import React                    from 'react'
import { useTranslation }       from 'react-i18next'

import { RecommendationsBlock } from '@fragments/recommendations-block'
import { Box }                   from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }      from '@ui/layout'
import { Spacer }               from '@ui/spacer'
import { TextComponent }        from '@ui/text'

import {CartLayoutProps} from "./cart-layout.interfaces";

export const CartBlockLayout = ({ navigation, children }: CartLayoutProps) => {
  const { t } = useTranslation()

  return (
    <Box justifyContent='space-between' flex={1}>
      <Row flex={1}>
        <Spacer space={16} />
        <Column flex={1}>
          <TextComponent fontSize='bigTitle' fontColor='black' fontWeight='semibold'>
            {t('screens.cart.shopping-cart')}
          </TextComponent>
          {children}
        </Column>
        <Spacer space={16} />
      </Row>
      <RecommendationsBlock
        navigation={navigation}
        // TODO: replace by necessary recommender
        recommenderCode='1efd76c810cc2364ff89677af3e076c7'
        titleVariant='title'
      />
    </Box>
  )
}

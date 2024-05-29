import React from 'react'
import {CartBlockLayout} from "./components";
import { Box } from '@ui/layout';
import { TextComponent } from '@ui/text';
import { useTranslation }       from 'react-i18next'
import {CartBlockProps} from "./cart-block.interfaces";
import {useCart} from './campaign-services'

export const CartBlock = ({ navigation }: CartBlockProps) => {
  const { t } = useTranslation()

  const {} = useCart()

  return <CartBlockLayout navigation={navigation}>
    <Box flex={1} justifyContent='center' alignItems='center'>
      <TextComponent fontSize='big' fontColor='gray' fontWeight='semibold'>
        {t('screens.cart.empty')}
      </TextComponent>
    </Box>
  </CartBlockLayout>
}
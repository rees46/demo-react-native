import React                                 from 'react'
import { useCallback }                 from 'react'
import { useTranslation }                    from 'react-i18next'

import { ProductType }                       from '@globals/types'
import { APP_ROUTES }                        from '@navigations/constants'
import { ButtonComponent }                   from '@ui/button'
import { Condition }                         from '@ui/condition'
import { Box }                                from '@ui/layout'
import { Row }                           from '@ui/layout'
import { Spacer }                            from '@ui/spacer'
import { TextComponent }                     from '@ui/text'

import { CartBlockProps }                    from './cart-block.interfaces'
import { CartBlockLayout }                    from './components'
import { CartItemComponent } from './components'
import { useCart }                           from './campaign-services'

export const CartBlock = ({ navigation }: CartBlockProps) => {
  const { t } = useTranslation()

  const { items, totalPrice, removeCartItem } = useCart({navigation})


  const handleShoppingPress = useCallback(() => {
    navigation.navigate(APP_ROUTES.HOME.tabName)
  }, [navigation])

  const handleRemoveItem = useCallback((id: string) => () => {
    removeCartItem?.(id)
  }, [removeCartItem])

  return (
    <CartBlockLayout navigation={navigation}>
      <Condition condition={items.length > 0}>
        <Box minHeight={250}>
          {items.map((item) => (
            <CartItemComponent key={item.uniqid} item={item as ProductType} onRemovePress={handleRemoveItem(item.uniqid!)} />
          ))}
          <Spacer height={16} />
          <Row justifyContent='flex-end'>
            <Spacer space={16} />
            <TextComponent fontSize='normal' fontColor='black' fontWeight='medium'>{`${t(
              'fragments.cart-block.total'
            )}: `}</TextComponent>
            <TextComponent
              fontSize='normal'
              fontColor='black'
              fontWeight='bold'
            >{`${totalPrice.toFixed(2)} ${items[0]?.currency}`}</TextComponent>
            <Spacer space={16} />
          </Row>
          <Spacer height={32} />
          <Row>
            <Spacer space={16} />
            <ButtonComponent
              variant='secondary'
              title={t('fragments.cart-block.continue_shopping')}
              fullWidth={false}
              onPress={handleShoppingPress}
              flex={0}
            />
            <Spacer space={16} />
            <ButtonComponent
              variant='primary'
              title={t('fragments.cart-block.checkout')}
              fullWidth={false}
            />
            <Spacer space={16} />
          </Row>
          <Spacer height={16} />
        </Box>
      </Condition>
      <Condition condition={items.length === 0}>
        <Box height={250} justifyContent='center' alignItems='center'>
          <TextComponent fontSize='big' fontColor='gray' fontWeight='semibold'>
            {t('screens.cart.empty')}
          </TextComponent>
        </Box>
      </Condition>
    </CartBlockLayout>
  )
}

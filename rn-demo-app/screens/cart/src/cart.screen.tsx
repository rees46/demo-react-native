import React              from 'react'
import { CartBlock } from '@fragments/cart-block'
import { ScreenLayout } from '@fragments/screen-layout'

const CartScreen = ({ navigation }) => {
  return (
    <ScreenLayout navigation={navigation} scrollable={false} menuVariant='menu'>
      <CartBlock navigation={navigation} />
    </ScreenLayout>
  )
}

export default CartScreen

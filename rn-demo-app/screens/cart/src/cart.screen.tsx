import React            from 'react'

import { CartBlock }    from '@fragments/cart-block'
import { ScreenLayout } from '@fragments/screen-layout'

import { CartProps }     from './cart.interfaces'

const CartScreen = ({ navigation }: CartProps) => {
  return (
    <ScreenLayout navigation={navigation} scrollable={false} menuVariant='menu'>
      <CartBlock navigation={navigation} />
    </ScreenLayout>
  )
}

export default CartScreen

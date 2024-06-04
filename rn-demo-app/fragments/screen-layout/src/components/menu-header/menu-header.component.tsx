import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'
import { useCallback }      from 'react'

import { APP_ROUTES }       from '@navigations/constants'
import { Row }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { useTheme }         from '@ui/theme'

import { ICON_SIZE }        from '../../screen-layout.constants'
import { MenuHeaderProps }  from './menu-header.interfaces'

export const MenuHeader = ({ navigation }: MenuHeaderProps) => {
  const theme = useTheme()

  const handlePress = useCallback(
    (route: string) => () => {
      navigation.navigate(route)
    },
    [navigation]
  )
  return (
    <Row justifyContent='space-between' alignItems='center'>
      <TouchableOpacity onPress={handlePress(APP_ROUTES.CATALOG.name)}>
        <Row>
          <Spacer space={12} />
          <Icon name='menu' size={ICON_SIZE} color={theme.colors.black} />
        </Row>
      </TouchableOpacity>
      <Row justifyContent='flex-end' flex={1}>
        <TouchableOpacity onPress={handlePress(APP_ROUTES.PRODUCT_SEARCH.name)}>
          <Icon name='search' size={ICON_SIZE} color={theme.colors.black} />
        </TouchableOpacity>
        <Spacer space={8} />
        <TouchableOpacity onPress={handlePress(APP_ROUTES.CART.name)}>
          <Icon name='cart-outline' size={ICON_SIZE} color={theme.colors.black} />
        </TouchableOpacity>
      </Row>
      <Spacer space={12} />
    </Row>
  )
}

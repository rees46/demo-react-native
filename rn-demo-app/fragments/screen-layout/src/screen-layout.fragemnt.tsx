import { Column }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Spacer }            from '@ui/spacer'

import React                 from 'react'
import Icon                  from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity }  from 'react-native'
import { useCallback }       from 'react'

import { APP_ROUTES }        from '@navigations/constants'
import { useTheme }          from '@ui/theme'

import { CART_ICON }         from './screen-layout.constants'
import { ICON_SIZE }         from './screen-layout.constants'
import { CATALOG_ICON }      from './screen-layout.constants'
import { SEARCH_ICON }       from './screen-layout.constants'
import { ScreenLayoutProps } from './screen-layout.interfaces'

export const ScreenLayout = ({ children, navigation }: ScreenLayoutProps) => {
  const theme = useTheme()

  const handlePress = useCallback(
    (route: string) => () => {
      navigation.navigate(route)
    },
    [navigation]
  )

  return (
    <Column backgroundColor='white'>
      <Spacer space={11} />
      <Row justifyContent='space-between' alignItems='center'>
        <TouchableOpacity onPress={handlePress(APP_ROUTES.CATALOG.name)}>
          <Row>
            <Spacer space={12} />
            <Icon name={CATALOG_ICON} size={ICON_SIZE} color={theme.colors.black} />
          </Row>
        </TouchableOpacity>
        <Row justifyContent='flex-end' flex={1}>
          <TouchableOpacity onPress={handlePress(APP_ROUTES.PRODUCT_SEARCH.name)}>
            <Icon name={SEARCH_ICON} size={ICON_SIZE} color={theme.colors.black} />
          </TouchableOpacity>
          <Spacer space={8} />
          <TouchableOpacity onPress={handlePress(APP_ROUTES.CART.name)}>
            <Icon name={CART_ICON} size={ICON_SIZE} color={theme.colors.black} />
          </TouchableOpacity>
        </Row>
        <Spacer space={12} />
      </Row>
      <Spacer space={7} />
      {children}
    </Column>
  )
}

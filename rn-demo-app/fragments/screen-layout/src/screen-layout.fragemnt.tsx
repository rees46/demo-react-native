import React                         from 'react'
import { ScrollView }                from 'react-native'

import { SCREEN_HEADER_HEIGHT }      from '@globals/constants'
import { Condition }                 from '@ui/condition'
import { Box }                       from '@ui/layout'

import { MenuHeader }                from './components'
import { NavigationHeaderComponent } from './components'
import { ScreenLayoutProps }         from './screen-layout.interfaces'

export const ScreenLayout = ({
  children,
  navigation,
  menuVariant = 'menu',
  navigationIconName = 'back',
  scrollable = true,
}: ScreenLayoutProps) => {
  return (
    <Box backgroundColor='white' fullHeight>
      <Condition condition={menuVariant === 'menu'}>
        <Box height={SCREEN_HEADER_HEIGHT} justifyContent='center'>
          <MenuHeader navigation={navigation} />
        </Box>
      </Condition>
      <Condition condition={menuVariant === 'navigation'}>
        <Box height={SCREEN_HEADER_HEIGHT} justifyContent='center'>
          <NavigationHeaderComponent navigation={navigation} variant={navigationIconName} />
        </Box>
      </Condition>
      <Condition condition={scrollable}>
        <ScrollView>{children}</ScrollView>
      </Condition>
      <Condition condition={!scrollable}>{children}</Condition>
    </Box>
  )
}

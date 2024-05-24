import React                        from 'react'
import Icon                         from 'react-native-vector-icons/Ionicons'
import { memo }                     from 'react'
import { useMemo }                  from 'react'
import { useTranslation }           from 'react-i18next'

import { HeaderFragment }           from '@fragments/header'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme }                 from '@ui/theme'

import { SCREEN_OPTIONS }           from './tab-layout.constants'
import { TAB_BAR_HEIGHT }           from './tab-layout.constants'
import { TabParamList }              from './tab-layout.interfaces'

const Tab = createBottomTabNavigator<TabParamList>()

export const TabLayoutNavigation = memo(() => {
  const { t } = useTranslation()
  const theme = useTheme()

  const tabScreens = useMemo(
    () =>
      SCREEN_OPTIONS.map(({
        name,
        title,
        component: Component,
        unfocusedIconName,
        focusedIconName,
      }) => (
        <Tab.Screen
          key={name}
          name={name}
          options={{
            title: t(`navigations.titles.${title}`),
            tabBarIcon: ({ focused, color }: { focused: boolean; color: string }) => {
              return (
                <Icon
                  name={focused ? focusedIconName : unfocusedIconName}
                  size={32}
                  color={color}
                />
              )
            },
          }}
        >
          {(props: any) => <Component {...props} />}
        </Tab.Screen>
      )),
    [t]
  )

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray,
        header: (props: any) => <HeaderFragment {...props} />,
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          height: TAB_BAR_HEIGHT,
        },
        tabBarLabel: () => null,
      }}
    >
      {tabScreens}
    </Tab.Navigator>
  )
})

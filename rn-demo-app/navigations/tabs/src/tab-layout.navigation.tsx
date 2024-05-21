import React, { memo, useMemo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screenOptions } from './tab-layout.constants';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export const TabLayoutNavigation = memo(() => {
  const { t } = useTranslation();

  const tabScreens = useMemo(
    () =>
      screenOptions.map(
        ({ name, title, component, unfocusedIconName, focusedIconName }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title: t(`navigations.titles.${title}`),
              tabBarIcon: ({ focused, color }) => {
                return (
                  <Icon
                    name={focused ? focusedIconName : unfocusedIconName}
                    size={24}
                    color={color}
                    style={{ marginBottom: -5 }}
                  />
                );
              },
              tabBarStyle: { height: 50, paddingBottom: 5 },
            }}
          />
        ),
      ),
    [t],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      }}>
      {tabScreens}
    </Tab.Navigator>
  );
});

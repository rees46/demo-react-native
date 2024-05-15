import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { screenOptions } from "./tab-layout.constants";
import Icon from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";

const Tab = createBottomTabNavigator();

export const TabLayoutFragment = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      }}
    >
      {screenOptions.map(
        ({ name, component, unfocusedIconName, focusedIconName }) => (
          <Tab.Screen
            key={name}
            name={t(`fragments.tab-layout.${name}`)}
            component={component}
            options={{
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
        )
      )}
    </Tab.Navigator>
  );
};

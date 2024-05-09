import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

interface ScreenOption {
  name: string;
  title: string;
  focusedIconName: "home" | "filter" | "cart" | "people";
  unfocusedIconName:
    | "home-outline"
    | "filter-outline"
    | "cart-outline"
    | "people-outline";
}

const screens: ScreenOption[] = [
  {
    name: "index",
    title: "Home",
    focusedIconName: "home",
    unfocusedIconName: "home-outline",
  },
  {
    name: "catalog",
    title: "Catalog",
    focusedIconName: "filter",
    unfocusedIconName: "filter-outline",
  },
  {
    name: "cart",
    title: "Cart",
    focusedIconName: "cart",
    unfocusedIconName: "cart-outline",
  },
  {
    name: "profile",
    title: "Profile",
    focusedIconName: "people",
    unfocusedIconName: "people-outline",
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      {screens.map(({ name, title, focusedIconName, unfocusedIconName }) => (
        <Tabs.Screen
          name={name}
          key={name}
          options={{
            title,
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? focusedIconName : unfocusedIconName}
                color={color}
              />
            ),
            tabBarStyle: {
              height: 50,
              paddingBottom: 5,
            },
          }}
        />
      ))}
    </Tabs>
  );
}

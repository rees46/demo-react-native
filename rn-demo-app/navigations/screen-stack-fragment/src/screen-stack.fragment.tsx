import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useTranslation} from "react-i18next";
import {ScreenStackProps} from "./screen-stack.interfaces";

const Stack = createNativeStackNavigator();

export const ScreenStack = ({
    groupName, screens
  }: ScreenStackProps) => {
  const {t} = useTranslation()

  return <Stack.Navigator initialRouteName={groupName}>
    {screens.map(({name, component, options}) => (
      <Stack.Screen key={name} name={name} component={component} options={{title: t(`navigations.titles.${name.toLowerCase()}`), ...options}}  />
    ))}
  </Stack.Navigator>
}


import {NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {ReactElement} from "react";

interface ScreenProps {
  name: string
  component: ({navigation}: {     navigation: any;   }) => ReactElement<any, any>
  options?:  NativeStackNavigationOptions
}

export interface ScreenStackProps {
  groupName: string
  screens: ScreenProps[]
}
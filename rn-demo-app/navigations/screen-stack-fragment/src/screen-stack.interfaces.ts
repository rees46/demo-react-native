import { ReactElement }                 from 'react'

import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

interface ScreenProps {
  name: string
  component: ({ navigation, route }: { navigation: any; route: any }) => ReactElement<any, any>
  options?: NativeStackNavigationOptions
}

export interface ScreenStackProps {
  groupName: string
  screens: ScreenProps[]
}

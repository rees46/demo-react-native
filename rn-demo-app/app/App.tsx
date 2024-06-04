import * as RNLocalize         from 'react-native-localize'

import { NavigationContainer } from '@react-navigation/native'

import React                   from 'react'
import { SafeAreaProvider }    from 'react-native-safe-area-context'
import { useEffect }           from 'react'

import { TabLayoutNavigation } from '@navigations/tab-layout'
import { SDKProvider }         from '@stores/rn-sdk'
import { ThemeProvider }       from '@ui/theme'
import SplashScreen            from 'react-native-splash-screen';

import i18n                    from './i18n'

const App = (): React.JSX.Element => {
  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode

    i18n.changeLanguage('ru' ?? locale)

    SplashScreen.hide();
  }, [])

  return (
    <ThemeProvider>
      <NavigationContainer>
        <SDKProvider>
          <SafeAreaProvider>
            <TabLayoutNavigation />
          </SafeAreaProvider>
        </SDKProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App

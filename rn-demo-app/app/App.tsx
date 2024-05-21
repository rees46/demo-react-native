import * as RNLocalize         from 'react-native-localize'

import { NavigationContainer } from '@react-navigation/native'

import React                   from 'react'
import { useEffect }           from 'react'

import { TabLayoutNavigation } from '@navigations/tab-layout'
import { SDKProvider }         from '@stores/rn-sdk'

import i18n                    from './i18n'

function App(): React.JSX.Element {
  useEffect(() => {
    const locale = RNLocalize.getLocales()[0].languageCode
    i18n.changeLanguage(locale)
  }, [])

  return (
    <SDKProvider>
      <NavigationContainer>
        <TabLayoutNavigation />
      </NavigationContainer>
    </SDKProvider>
  )
}
export default App

import { Component }      from 'react'
import React              from 'react'
import { Button }         from 'react-native'
import { View }           from 'react-native'
import { ScrollView }     from 'react-native'
import { StatusBar }      from 'react-native'
import { SafeAreaView }   from 'react-native'
import { useColorScheme } from 'react-native'
import WebView            from 'react-native-webview'
import { Colors }         from 'react-native/Libraries/NewAppScreen'
import { Header }         from 'react-native/Libraries/NewAppScreen'
// @ts-ignore
import REES46             from '@rees46/react-native-sdk'

const sdk = new REES46('357382bf66ac0ce2f1722677c59511', 'android', true)

function notifyClick(data: any) {
  console.log('\n')
  console.log('notifyClick: ', data)
}

function notifyReceive(data: any) {
  console.log('\n')
  console.log('notifyReceive: ', data)
}

function notifyBgReceive(data: any) {
  console.log('\n')
  console.log('notifyBgReceive: ', data)
}

sdk.track('view', '17520')

sdk.track('wish', 17515);
sdk.track('wish', [17515, 17520]);
sdk.track('wish', []);

sdk.track('purchase', {
  'email': "john.doe@examplemail.com",
  'phone': "4400114527199",
  'products': [
    {'id': 37, 'price': 318, 'quantity': 1},
  ],
  'custom': {
      'date_start': '2024-03-01',
  },
  'order': 'N318',
  'order_price': 29999
});

sdk.initPush()

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button onPress={notifyReceive} title='NOTIFY RECEIVE' />
          <Button onPress={notifyClick} title='NOTIFY CLICK' />
          <Button onPress={notifyBgReceive} title='NOTIFY BG RECEIVE' />
        </View>
        <MyInlineWeb />
      </ScrollView>
    </SafeAreaView>
  )
}

class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{html: '<h1>This is a static HTML source!</h1>'}}
      />
    );
  }
}

export default App

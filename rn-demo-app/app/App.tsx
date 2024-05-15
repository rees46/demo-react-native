import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabLayoutFragment} from '@fragments/tab-layout';
import {SDKProvider} from '@stores/rn-sdk';

function App(): React.JSX.Element {
  return (
    <SDKProvider>
      <NavigationContainer>
        <TabLayoutFragment />
      </NavigationContainer>
    </SDKProvider>
  );
}
export default App;

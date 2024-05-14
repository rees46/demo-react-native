import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabLayoutFragment} from './fragments';
import {SDKProvider} from './stores';

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

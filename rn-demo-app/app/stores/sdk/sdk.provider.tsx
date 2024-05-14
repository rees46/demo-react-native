import React from 'react';
import REES46 from '@rees46/react-native-sdk';
import {SDKContext} from './sdk.context';
import {SDKProviderProps} from './sdk.interfaces';
import {MOBILE_PLATFORM, SHOP_ID} from './sdk.constants.ts';

export const SDKProvider: React.FC<SDKProviderProps> = ({children}) => {
  const sdk = new REES46(SHOP_ID, MOBILE_PLATFORM, true);

  return <SDKContext.Provider value={sdk}>{children}</SDKContext.Provider>;
};

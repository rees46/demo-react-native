import { useContext } from 'react';
import REES46 from '@rees46/react-native-sdk';
import { SDKContext } from './sdk.context';

export const useSDK = (): REES46 => {
  const context = useContext(SDKContext);
  if (context === null) {
    throw new Error('useSDK must be used within a SDKProvider');
  }
  return context;
};

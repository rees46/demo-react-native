import { createContext } from 'react'

import REES46            from '@rees46/react-native-sdk'

export const SDKContext = createContext<REES46 | null>(null)

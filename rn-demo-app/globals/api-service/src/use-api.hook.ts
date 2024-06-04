import { useMemo }         from 'react'

import { privateInstance } from './axios-instance'
import { publicInstance }  from './axios-instance'

export const useApi = () =>
  useMemo(() => {
    return {
      privateApi: privateInstance,
      publicApi: publicInstance,
    }
  }, [])

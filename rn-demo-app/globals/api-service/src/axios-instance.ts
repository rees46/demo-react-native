import axios           from 'axios'

import { WHITE_LABEL } from '@globals/constants'
import { AUTH_TOKEN }  from '@globals/constants'

export const publicInstance = axios.create({
  baseURL: `${WHITE_LABEL === 'rees46' ? 'https://api.rees46.ru' : 'https://api.rees46.ru'}`,
})

export const privateInstance = axios.create({
  baseURL: `${WHITE_LABEL === 'rees46' ? 'https://app.rees46.ru' : 'https://app.rees46.ru'}/api/v2`,
})

privateInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${AUTH_TOKEN}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

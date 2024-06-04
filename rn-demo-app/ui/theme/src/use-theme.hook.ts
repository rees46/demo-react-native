import { useTheme as useBaseTheme } from '@emotion/react'

import { ThemeType }                from './theme.provider'

export const useTheme = () => useBaseTheme() as ThemeType

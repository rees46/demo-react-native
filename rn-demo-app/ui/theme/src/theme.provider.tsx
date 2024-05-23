import React                                     from 'react'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import { ThemeProviderProps }                    from './theme.interfaces'
import { borders }                               from './theme'
import { colors }                                from './theme'
import { fontFamily }                            from './theme'
import { fontSize }                              from './theme'
import { fontWeight }                            from './theme'
import { radii }                                 from './theme'

const theme = {
  colors,
  fontSize,
  fontWeight,
  fontFamily,
  radii,
  borders,
}

export type ThemeType = typeof theme

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
}

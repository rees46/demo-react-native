import { ReactNode } from 'react'

export interface ScreenLayoutProps {
  children: ReactNode
  navigation?: any
  menuVariant?: 'navigation' | 'menu'
  navigationIconName?: 'home' | 'back'
  scrollable?: boolean
}

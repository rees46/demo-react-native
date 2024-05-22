import { ComponentType } from 'react'

export interface ScreenOptions {
  name: string
  title: string
  component: ComponentType<any>
  focusedIconName: 'home' | 'folder' | 'cart' | 'people'
  unfocusedIconName: 'home-outline' | 'folder-outline' | 'cart-outline' | 'people-outline'
}

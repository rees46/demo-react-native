import {ComponentType} from 'react';

export interface ScreenOptions {
  name: string;
  component: ComponentType<any>;
  focusedIconName: 'home' | 'filter' | 'cart' | 'people';
  unfocusedIconName:
    | 'home-outline'
    | 'filter-outline'
    | 'cart-outline'
    | 'people-outline';
}

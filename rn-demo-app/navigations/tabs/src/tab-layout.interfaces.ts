import { ComponentType } from "react";

export interface ScreenOptions {
  name: string
  title: string
  component: ComponentType<any>
  focusedIconName: "home" | "list" | "cart" | "people"
  unfocusedIconName:
    | "home-outline"
    | "list-outline"
    | "cart-outline"
    | "people-outline"
}

export interface ButtonProps {
  height?: number
  onPress?: VoidFunction
  variant: 'secondary' | 'primary' | 'clear'
  title?: string
  iconSize?: number
  flex?: number
  fullWidth?: boolean
}

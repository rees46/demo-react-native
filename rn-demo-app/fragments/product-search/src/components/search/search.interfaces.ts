export interface SearchProps {
  value: string
  onChangeText: (value: string) => void
  placeholder?: string
  clearable?: boolean
  onClose: VoidFunction
  navigation?: any
}

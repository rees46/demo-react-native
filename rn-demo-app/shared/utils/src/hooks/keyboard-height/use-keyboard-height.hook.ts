import { Keyboard }          from 'react-native'
import { useEffect }         from 'react'
import { useState }          from 'react'

import { UseKeyboardHeight } from './use-keyboard-height.interfaces'

export const useKeyboardHeight: UseKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      setKeyboardHeight(event.endCoordinates.height)
    })
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0)
    })

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  return keyboardHeight
}

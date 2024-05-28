import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TextInput }        from 'react-native'
import { TouchableOpacity } from 'react-native'
import { forwardRef }       from 'react'
import { useCallback }      from 'react'

import { Box }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { useTheme }         from '@ui/theme'

import { TextInputElement } from '../../input.element'
import { InputProps }       from '../../input.interfaces'

export const NumericInput = forwardRef<TextInput, InputProps>((
  { height, placeholder, value, onChangeText, min = 0, max = Infinity, variant }: InputProps,
  ref
) => {
  const theme = useTheme()

  const increment = useCallback(() => {
    const newValue = parseInt(value, 10)
    if (!isNaN(newValue) && newValue < max) {
      onChangeText?.(String(newValue + 1))
    }
  }, [onChangeText, value])

  const decrement = useCallback(() => {
    const newValue = parseInt(value, 10)
    if (!isNaN(newValue) && newValue > min) {
      onChangeText?.(String(newValue - 1))
    }
  }, [onChangeText, value])

  const handleChange = useCallback(
    (value: string) => {
      const newValue = parseInt(value, 10)
      if (!isNaN(newValue) && newValue >= min && newValue <= max) {
        onChangeText?.(String(newValue))
      } else {
        onChangeText?.(String(0))
      }
    },
    [onChangeText]
  )

  return (
    <Box
      height={height}
      flexDirection='row'
      alignItems='center'
      radius='normal'
      border='bigGray'
      flex={1}
    >
      <Spacer space={16} />
      <TouchableOpacity onPress={decrement}>
        <Box width={24} height={24} justifyContent='center' alignItems='center'>
          <Icon name='remove' size={24} color={theme.colors.gray} />
        </Box>
      </TouchableOpacity>
      <Spacer space={4} />
      <TextInputElement
        placeholder={placeholder}
        value={value}
        keyboardType='numeric'
        onChangeText={handleChange}
        variant={variant}
        ref={ref}
      />
      <Spacer space={4} />
      <TouchableOpacity onPress={increment}>
        <Box width={24} height={24} justifyContent='center' alignItems='center'>
          <Icon name='add' size={24} color={theme.colors.gray} />
        </Box>
      </TouchableOpacity>
      <Spacer space={16} />
    </Box>
  )
})

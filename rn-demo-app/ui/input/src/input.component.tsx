import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TextInput }        from 'react-native'
import { TouchableOpacity } from 'react-native'
import { forwardRef }       from 'react'
import { useCallback }      from 'react'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { useTheme }         from '@ui/theme'

import { TextInputElement } from './input.element'
import { InputProps }       from './input.interfaces'

export const Input = forwardRef<TextInput, InputProps>((
  { height = 44, clearable, placeholder, value, onChangeText }: InputProps,
  ref
) => {
  const theme = useTheme()

  const handleClearPress = useCallback(() => {
    onChangeText?.('')
  }, [onChangeText])

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
      <TextInputElement
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        ref={ref}
      />
      <Condition condition={clearable && !!value?.length}>
        <TouchableOpacity onPress={handleClearPress}>
          <Box
            width={22}
            height={22}
            backgroundColor='gray'
            justifyContent='center'
            alignItems='center'
            radius='rounded'
          >
            <Icon name='close' size={12} color={theme.colors.white} />
          </Box>
        </TouchableOpacity>
      </Condition>
      <Spacer space={16} />
    </Box>
  )
})

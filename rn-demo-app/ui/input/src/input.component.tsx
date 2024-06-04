import React                from 'react'
import Icon                 from 'react-native-vector-icons/Ionicons'
import { TextInput }        from 'react-native'
import { TouchableOpacity } from 'react-native'
import { forwardRef }       from 'react'
import { useCallback }      from 'react'

import { ButtonComponent }  from '@ui/button'
import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { useTheme }         from '@ui/theme'

import { NumericInput }     from './components'
import { TextInputElement } from './input.element'
import { InputProps }       from './input.interfaces'

export const Input = forwardRef<TextInput, InputProps>((
  {
    height = 44,
    clearable,
    placeholder,
    value,
    onChangeText,
    variant = 'text',
    ...props
  }: InputProps,
  ref
) => {
  const theme = useTheme()

  const handleClearPress = useCallback(() => {
    onChangeText?.('')
  }, [onChangeText])

  return (
    <>
      <Condition condition={variant === 'text'}>
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
            {...props}
          />
          <Condition condition={clearable && !!value?.length}>
            <ButtonComponent variant='clear' onPress={handleClearPress} height={22} iconSize={12} />
          </Condition>
          <Spacer space={16} />
        </Box>
      </Condition>
      <Condition condition={variant === 'numeric'}>
        <NumericInput
          ref={ref}
          height={height}
          clearable
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          variant={variant}
          {...props}
        />
      </Condition>
    </>
  )
})

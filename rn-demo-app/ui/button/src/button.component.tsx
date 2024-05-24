import React                from 'react'
import { TouchableOpacity } from 'react-native'
import { memo }             from 'react'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { TextComponent }    from '@ui/text'

import { ButtonProps }      from './button.interfaces'

export const ButtonComponent = memo(({
  height = 44,
  variant = 'primary',
  onPress,
  title,
}: ButtonProps) => {
  return (
    <>
      <Condition condition={variant === 'primary'}>
        <Box height={height} fullWidth>
          <TouchableOpacity onPress={onPress}>
            <Box
              height={height}
              backgroundColor='black'
              radius='normal'
              justifyContent='center'
              alignItems='center'
              fullWidth
            >
              <TextComponent fontColor='white' fontSize='normal' fontWeight='medium'>
                {title ?? ''}
              </TextComponent>
            </Box>
          </TouchableOpacity>
        </Box>
      </Condition>
      <Condition condition={variant === 'secondary'}>
        <Box height={height} flex={1}>
          <TouchableOpacity onPress={onPress}>
            <Box
              height={height}
              border='smallBlack'
              radius='normal'
              justifyContent='center'
              alignItems='center'
              fullWidth
            >
              <TextComponent fontColor='black' fontSize='normal' fontWeight='medium'>
                {title ?? ''}
              </TextComponent>
            </Box>
          </TouchableOpacity>
        </Box>
      </Condition>
    </>
  )
})

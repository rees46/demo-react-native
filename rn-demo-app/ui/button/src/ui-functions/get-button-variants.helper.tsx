import React                     from 'react'
import Icon                      from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity }       from 'react-native'

import { Box }                   from '@ui/layout'
import { Row }              from '@ui/layout'
import { Spacer }                 from '@ui/spacer'
import { TextComponent }          from '@ui/text'

import { GetButtonVariantsProps } from './get-button-variants.interfaces'

export const getButtonVariants = (props: GetButtonVariantsProps) => ({
  primary: (
    <Box height={props.height} fullWidth={props.fullWidth} flex={props.flex}>
      <TouchableOpacity onPress={props.onPress}>
        <Box
          height={props.height}
          backgroundColor='black'
          radius='normal'
          justifyContent='center'
          alignItems='center'
          fullWidth
        >
          <Row>
            <Spacer space={16} />
            <TextComponent fontColor='white' fontSize='normal' fontWeight='medium'>
              {props.title ?? ''}
            </TextComponent>
            <Spacer space={16} />
          </Row>
        </Box>
      </TouchableOpacity>
    </Box>
  ),
  secondary: (
    <Box height={props.height} fullWidth={props.fullWidth} flex={props.flex}>
      <TouchableOpacity onPress={props.onPress}>
        <Box
          height={props.height}
          border='smallBlack'
          radius='normal'
          justifyContent='center'
          alignItems='center'
          fullWidth
        >
          <Row>
            <Spacer space={16} />
            <TextComponent fontColor='black' fontSize='normal' fontWeight='medium' lineHeight={1}>
              {props.title ?? ''}
            </TextComponent>
            <Spacer space={16} />
          </Row>
        </Box>
      </TouchableOpacity>
    </Box>
  ),
  clear: (
    <TouchableOpacity onPress={props.onPress}>
      <Box
        width={props.height}
        height={props.height}
        backgroundColor='gray'
        justifyContent='center'
        alignItems='center'
        radius='rounded'
      >
        <Icon name='close' size={props.iconSize} color={props.theme.colors.white} />
      </Box>
    </TouchableOpacity>
  ),
})

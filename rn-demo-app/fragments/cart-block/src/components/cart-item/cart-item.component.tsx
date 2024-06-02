import React                 from 'react'

import { useCallback } from 'react'

import { ButtonComponent }    from '@ui/button'
import { Divider }           from '@ui/divider'
import { ImageComponent }     from '@ui/image'
import { Box }                from '@ui/layout'
import { Row }           from '@ui/layout'
import { Spacer }            from '@ui/spacer'
import { TextComponent }      from '@ui/text'
import { useSDK }            from '@stores/rn-sdk'

import { CartItemProps }      from './cart-item.interfaces'

export const CartItemComponent = ({ item, onRemovePress }: CartItemProps) => {
  const sdk = useSDK()

  const handleClearPress = useCallback(async () => {
    await sdk.track('remove_from_cart', item.uniqid)
    onRemovePress?.()
  }, [sdk, item, onRemovePress])

  return (
    <Box>
      <Divider />
      <Spacer height={8} />
      <Row alignItems='center'>
        <Spacer space={16} />
        <Box>
          <ImageComponent
            source={{ uri: item.picture }}
            width={48}
            height={48}
            resizeMode='contain'
          />
        </Box>
        <Spacer space={12} />
        <Box flex={1} justifyContent='space-around'>
          <TextComponent
            fontSize='semi'
            fontColor='black'
            lineHeight={1}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item.name}
          </TextComponent>
          <Spacer space={8} />
          <TextComponent
            fontSize='normal'
            fontColor='black'
            fontWeight='medium'
            lineHeight={1}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {item?.categories?.at(-1)?.name ?? ''}
          </TextComponent>
        </Box>
        <Spacer space={16} />
        <TextComponent fontWeight='semibold' fontSize='normal' lineHeight={1}>
          {`x${item.quantity}`}
        </TextComponent>
        <Spacer space={16} />
        <TextComponent fontWeight='semibold' fontSize='normal' lineHeight={1}>
          {`${item.price} ${item.currency}`}
        </TextComponent>
        <Spacer space={16} />
        <ButtonComponent variant='clear' height={22} iconSize={12} onPress={handleClearPress} />
        <Spacer space={16} />
      </Row>
      <Spacer height={8} />
      <Divider />
    </Box>
  )
}

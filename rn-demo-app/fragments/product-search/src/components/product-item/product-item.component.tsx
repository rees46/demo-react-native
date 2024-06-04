import React                from 'react'
import { TouchableOpacity } from 'react-native'
import { useCallback }      from 'react'
import { memo }             from 'react'

import { ImageComponent }   from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { TextComponent }    from '@ui/text'

import { ProductItemProps } from './product-item.interfaces'

export const ProductItem = memo(({ onPress, item }: ProductItemProps) => {
  const handleItemPress = useCallback(() => onPress?.(item.id), [item.id, onPress])

  return (
    <TouchableOpacity onPress={handleItemPress}>
      <Column>
        <Spacer height={8} />
        <Row>
          <Spacer space={16} />
          <ImageComponent
            source={{ uri: item.image_url }}
            width={48}
            height={48}
            resizeMode='contain'
          />
          <Spacer space={12} />
          <Box>
            <TextComponent fontSize='semi' fontColor='black' lineHeight={1}>
              {item.name}
            </TextComponent>
            <Spacer height={8} />
            <TextComponent fontSize='semi' fontColor='black' lineHeight={1} fontWeight='semibold'>
              {item.price_full_formatted ?? ''}
            </TextComponent>
          </Box>
          <Spacer space={16} />
        </Row>
      </Column>
    </TouchableOpacity>
  )
})

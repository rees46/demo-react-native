import React, {useCallback, useMemo} from 'react'
import { memo }                     from 'react'

import { ProductCardProps }         from './product-card.interfaces'
import { Condition } from '@ui/condition';
import {TouchableWithoutFeedback} from "react-native";
import {BIG_IMAGE_SIZE, NORMAL_IMAGE_SIZE} from "./product-card.constants";
import { Box } from '@ui/layout';
import { ImageComponent } from '@ui/image';
import { Spacer } from '@ui/spacer';
import { TextComponent } from '@ui/text';

export const ProductCard = memo(
  ({ item, onPress, variant = 'normal', width = 172, alignItems = 'flex-end', onlyRightPadding = false }: ProductCardProps) => {
    const handleItemPress = useCallback(() => onPress?.(item.id), [item.id, onPress])

    const contentWidth = useMemo(() => (variant === 'normal' || onlyRightPadding)  ? width - 16 : width - 2 * 16, [width, onlyRightPadding])
    const imageSize = useMemo(() => variant === 'normal' ? width - 16 : width - 2 * 16, [width, variant])

    return(
      <TouchableWithoutFeedback onPress={handleItemPress}>
        <Box width={width} justifyContent='flex-start' alignItems={alignItems}>
          <Box width={contentWidth}>
            <Box radius='big' border='smallGray' overflow='hidden'>
              <ImageComponent
                source={{ uri: item.image_url_resized![variant === 'normal' ? NORMAL_IMAGE_SIZE : BIG_IMAGE_SIZE] }}
                width={imageSize}
                height={imageSize}
                resizeMode='contain'
              />
            </Box>
            <Spacer height={8} />
            <TextComponent
              fontColor='gray'
              fontSize='small'
              numberOfLines={1}
              ellipsizeMode='tail'
              lineHeight={1}
            >
              {item.name}
            </TextComponent>
            <Spacer height={4} />
            <TextComponent
              fontColor='black'
              fontSize='normal'
              fontWeight='medium'
              numberOfLines={1}
              ellipsizeMode='tail'
              lineHeight={1}
            >
              {item.categories.at(-1)?.name ?? ''}
            </TextComponent>
            <Spacer height={8} />
            <Condition condition={!!item.oldprice_full}>
              <TextComponent
                lineHeight={1}
                fontSize='small'
                fontColor='gray'
                lineTrough
              >{`${item.oldprice_full} ${item.currency}`}</TextComponent>
              <Spacer height={4} />
            </Condition>
            <TextComponent fontWeight='bold' fontSize={variant === 'normal' ? 'semi' : 'smallTitle' } lineHeight={1}>
              {item.price_formatted ?? ''}
            </TextComponent>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    )
  },
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
)

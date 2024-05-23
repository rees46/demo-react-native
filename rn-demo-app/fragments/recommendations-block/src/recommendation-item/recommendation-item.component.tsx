import React                       from 'react'
import { Image }                   from 'react-native'
import { memo }                    from 'react'

import { Condition }               from '@ui/condition'
import { Box }                     from '@ui/layout'
import { Spacer }                  from '@ui/spacer'
import { TextComponent }           from '@ui/text'

import { IMAGE_SIZE }              from '../recommendations-block.constants'
import { RecommendationItemProps } from './recommendation-item.interfaces'

export const RecommendationItem = memo(
  ({ item }: RecommendationItemProps) => (
    <Box width={172} height={246} justifyContent='flex-start' alignItems='center'>
      <Box width={IMAGE_SIZE}>
        <Box radius='big' border='primary' overflow='hidden'>
          <Image source={{ uri: item.image_url_resized[IMAGE_SIZE] }} width={140} height={140} />
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
          fontWeight='semibold'
          numberOfLines={1}
          ellipsizeMode='tail'
          lineHeight={1}
        >
          {item.categories.at(-1)?.name ?? ''}
        </TextComponent>
        <Spacer height={8} />
        <Condition condition={!!item.oldprice_full || true}>
          <TextComponent
            lineHeight={1}
            fontSize='small'
            fontColor='gray'
            lineTrough
          >{`${3000} ${item.currency}`}</TextComponent>
          <Spacer height={4} />
        </Condition>
        <TextComponent fontWeight='bold' fontSize='semi' lineHeight={1}>
          {item.price_formatted}
        </TextComponent>
      </Box>
    </Box>
  ),
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
)

import { ImageComponent }           from '@ui/image'

import React                        from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { memo }                     from 'react'

import { Condition }                from '@ui/condition'
import { Box }                      from '@ui/layout'
import { Spacer }                   from '@ui/spacer'
import { TextComponent }            from '@ui/text'

import { IMAGE_SIZE }               from '../../recommendations-block.constants'
import { RecommendationItemProps }  from './recommendation-item.interfaces'

export const RecommendationItem = memo(
  ({ item, onPress }: RecommendationItemProps) => (
    <TouchableWithoutFeedback onPress={() => onPress(item.id)}>
      <Box width={172} height={246} justifyContent='flex-start' alignItems='center'>
        <Box width={IMAGE_SIZE}>
          <Box radius='big' border='primary' overflow='hidden'>
            <ImageComponent
              source={{ uri: item.image_url_resized![IMAGE_SIZE] }}
              width={140}
              height={140}
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
            fontWeight='semibold'
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
          <TextComponent fontWeight='bold' fontSize='semi' lineHeight={1}>
            {item.price_formatted ?? ''}
          </TextComponent>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  ),
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
)

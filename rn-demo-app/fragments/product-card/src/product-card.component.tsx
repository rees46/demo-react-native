import React                        from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { useMemo }                  from 'react'
import { memo }                     from 'react'
import { useTranslation }           from 'react-i18next'

import { ButtonComponent }          from '@ui/button'
import { Condition }                from '@ui/condition'
import { ImageComponent }           from '@ui/image'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Spacer }                   from '@ui/spacer'
import { TextComponent }            from '@ui/text'

import { BIG_IMAGE_SIZE }           from './product-card.constants'
import { NORMAL_IMAGE_SIZE }        from './product-card.constants'
import { ProductCardProps }         from './product-card.interfaces'

export const ProductCard = memo(
  ({
    item,
    onItemPress,
    variant = 'normal',
    width = 172,
    alignItems = 'flex-end',
    onlyRightPadding = false,
    withButton,
    onButtonPress,
  }: ProductCardProps) => {
    const { t } = useTranslation()

    const contentWidth = useMemo(
      () => (variant === 'normal' || onlyRightPadding ? width - 16 : width - 2 * 16),
      [width, onlyRightPadding]
    )
    const imageSize = useMemo(
      () => (variant === 'normal' ? width - 16 : width - 2 * 16),
      [width, variant]
    )

    return (
      <TouchableWithoutFeedback onPress={onItemPress}>
        <Box width={width} justifyContent='flex-start' alignItems={alignItems}>
          <Box width={contentWidth}>
            <Box radius='big' border='smallGray' overflow='hidden'>
              <ImageComponent
                source={{
                  uri: item.image_url_resized![
                    variant === 'normal' ? NORMAL_IMAGE_SIZE : BIG_IMAGE_SIZE
                  ],
                }}
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
            <Row justifyContent='space-between'>
              <Column justifyContent='center'>
                <Condition condition={!!item.oldprice_full}>
                  <TextComponent
                    lineHeight={1}
                    fontSize='small'
                    fontColor='gray'
                    lineTrough
                  >{`${item.oldprice_full} ${item.currency}`}</TextComponent>
                  <Spacer height={4} />
                </Condition>
                <TextComponent
                  fontWeight='bold'
                  fontSize={variant === 'normal' ? 'semi' : 'smallTitle'}
                  lineHeight={1}
                >
                  {item.price_formatted ?? ''}
                </TextComponent>
              </Column>
              <Condition condition={!!withButton}>
                <Box width={85} justifyContent='flex-end'>
                  <ButtonComponent
                    variant='primary'
                    title={t('fragments.product-card.shop')}
                    height={28}
                    onPress={onButtonPress ?? onItemPress}
                  />
                </Box>
              </Condition>
            </Row>
          </Box>
        </Box>
      </TouchableWithoutFeedback>
    )
  },
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id
)

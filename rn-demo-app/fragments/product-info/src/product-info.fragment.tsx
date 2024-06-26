import { priceFormatter } from '@shared/utils'
import React              from 'react'
import { memo }           from 'react'
import { useEffect }      from 'react'

import { SHOP_ID }          from '@globals/constants'
import { ProductType }      from '@globals/types'
import { Condition }        from '@ui/condition'
import { ImageComponent }   from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Spacer }           from '@ui/spacer'
import { TextComponent }    from '@ui/text'
import { useApi }           from '@globals/api-service'

import { AddToCart }        from './components'
import { ProductInfoProps } from './product-info.interfaces'

export const ProductInfo = memo(({ id }: ProductInfoProps) => {
  const { publicApi } = useApi()
  const [product, setProduct] = React.useState<
    ProductType & { uniqid: string; stock_quantity?: number }
  >()
  const [loading, setLoading] = React.useState<boolean>(true)

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await publicApi.get('/products/get', {
          params: {
            shop_id: SHOP_ID,
            item_id: id,
          },
        })
        setProduct(response.data)
        setLoading(false)
      } catch (e) {
        console.error('Failed to fetch product ', e)
      }
    }

    fetchProductInfo()
  }, [])

  if (loading || !product?.name) {
    return null
  }

  const price = priceFormatter(product.price)
  const oldPrice = priceFormatter(product?.oldprice)

  return (
    <>
      <Row>
        <Spacer space={16} />
        <Box flex={1}>
          <ImageComponent
            source={{ uri: product!.picture }}
            fullWidth
            resizeMode='contain'
            horizontalSpace={32}
          />
          <Spacer height={20} />
          <TextComponent
            fontColor='black'
            fontSize='normal'
            fontWeight='semibold'
            numberOfLines={1}
            ellipsizeMode='tail'
            lineHeight={1.5}
          >
            {product!.name}
          </TextComponent>
          <TextComponent
            fontColor='black'
            fontSize='title'
            fontWeight='semibold'
            numberOfLines={1}
            ellipsizeMode='tail'
            lineHeight={1}
          >
            {product?.categories?.at(-1)?.name ?? ''}
          </TextComponent>
          <Spacer height={12} />
          <TextComponent
            fontColor='black'
            fontSize='smallText'
            fontWeight='regular'
            lineHeight={1.5}
          >
            {product!.description ?? ''}
          </TextComponent>
          <Spacer height={20} />
          <Condition condition={!!product?.oldprice}>
            <TextComponent
              lineHeight={1}
              fontSize='smallTitle'
              fontColor='gray'
              lineTrough
            >{`${oldPrice} ${product!.currency}`}</TextComponent>
            <Spacer height={4} />
          </Condition>
          <TextComponent fontWeight='semibold' fontSize='title' lineHeight={1}>
            {`${price} ${product!.currency}`}
          </TextComponent>
        </Box>
        <Spacer space={16} />
      </Row>
      <Spacer height={16} />
      <AddToCart productId={product.uniqid} max={product.stock_quantity} />
      <Spacer height={20} />
    </>
  )
})

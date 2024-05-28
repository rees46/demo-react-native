import React                         from 'react'
import { FlatList }                  from 'react-native'
import { useCallback }               from 'react'
import { useTranslation }            from 'react-i18next'

import { ProductCard }               from '@fragments/product-card'
import { APP_ROUTES }                from '@navigations/constants'
import { ButtonComponent }           from '@ui/button'
import { Condition }                 from '@ui/condition'
import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Spacer }                    from '@ui/spacer'

import { ProductListProps }          from './product-list.interfaces'
import { getProductCardWidthHelper } from './utils'

export const ProductList = ({ products, navigation, onLoad, total }: ProductListProps) => {
  const handleProductPress = useCallback(
    (id: string) => () => {
      navigation.navigate(APP_ROUTES.PRODUCT.name, { id })
    },
    [navigation]
  )
  const { t } = useTranslation()

  const getAlignmentItem = useCallback(
    (index: number) => ((index + 1) % 2 === 0 ? 'flex-start' : 'center'),
    []
  )

  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <Box>
          <ProductCard
            item={item}
            width={getProductCardWidthHelper()}
            onItemPress={handleProductPress(item.id)}
            variant='big'
            alignItems={getAlignmentItem(index)}
            onlyRightPadding={(index + 1) % 2 === 0}
            withButton
          />
          <Spacer height={20} />
        </Box>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListFooterComponent={
        <Condition condition={products?.length > 0 && (total ? products.length < total : true) }>
          <Box>
            <Row>
              <Spacer space={16} />
              <ButtonComponent
                title={t('fragments.product-list.show-more')}
                variant='secondary'
                onPress={onLoad}
              />
              <Spacer space={16} />
            </Row>
            <Spacer height={16} />
          </Box>
        </Condition>
      }
    />
  )
}

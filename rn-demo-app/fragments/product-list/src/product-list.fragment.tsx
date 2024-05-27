import { ProductCard } from '@fragments/product-card';
import { ButtonComponent } from '@ui/button';
import React, { useCallback } from 'react'
import { FlatList } from 'react-native';
import {getProductCardWidthHelper} from "./utils";
import {ProductListProps} from "./product-list.interfaces";
import {APP_ROUTES} from '@navigations/constants'
import { Spacer } from '@ui/spacer';
import { Box, Row } from '@ui/layout';
import {useTranslation} from "react-i18next";
import { Condition } from '@ui/condition';

export const ProductList = ({ products, navigation, onLoad }: ProductListProps) => {
  const handleProductPress = useCallback((id: string) => () => {
    navigation.navigate(APP_ROUTES.PRODUCT.name, { id })
  }, [navigation])
  const {t} = useTranslation();

  const getAlignmentItem = useCallback((index: number) => ((index + 1) % 2) === 0 ? 'flex-start' : 'center', [])

  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) =>
        <Box>
          <ProductCard
            item={item}
            width={getProductCardWidthHelper()}
            onPress={handleProductPress(item.id)}
            variant='big'
            alignItems={getAlignmentItem(index)}
            onlyRightPadding={((index + 1) % 2) === 0}
          />
          <Spacer height={16} />
        </Box>
      }
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListFooterComponent={
        <Condition condition={products?.length > 0}>
          <Box>
            <Row>
              <Spacer space={16} />
              <ButtonComponent title={t('fragments.product-list.show-more')} variant='secondary' onPress={onLoad} />
              <Spacer space={16} />
            </Row>
            <Spacer height={16} />
          </Box>
        </Condition>
      }
    />
  );
}
import React                         from 'react'
import { ActivityIndicator }         from 'react-native'
import { FlatList }                  from 'react-native'
import { memo }                      from 'react'
import { useCallback }               from 'react'

import { ProductCard }               from '@fragments/product-card'
import { APP_ROUTES }                from '@navigations/constants'
import { Condition }                 from '@ui/condition'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Spacer }                    from '@ui/spacer'
import { TextComponent }             from '@ui/text'
import { useTheme }                  from '@ui/theme'

import { Show }                      from './components'
import { RecommendationsBlockProps } from './recommendations-block.interfaces'
import { useRecommendations }        from './campaign-services'

export const RecommendationsBlock = memo(({
  navigation,
  recommenderCode,
  titleVariant = 'smallTitle',
  options = {},
  infiniteScroll = true
}: RecommendationsBlockProps) => {
  const { loadRecommendations, recommendations, blockTitle, loading } = useRecommendations({
    recommenderCode,
    options,
    infiniteScroll
  })
  const theme = useTheme()

  const renderFooter = useCallback(() => {
    return loading ? (
      <Box flex={1} justifyContent='center' alignItems='center'>
        <ActivityIndicator size='large' color={theme.colors.black} />
      </Box>
    ) : null
  }, [loading])

  const handleProductPress = useCallback(
    (id: string) => () => {
      navigation.push(APP_ROUTES.PRODUCT.name, { id })
    },
    [navigation]
  )

  return (
    <Condition condition={!!recommendations?.length}>
      <Column>
        <Row>
          <Spacer space={16} />
          <Row justifyContent='space-between' flex={1}>
            <Box width='50%'>
              <TextComponent
                fontSize={titleVariant}
                fontWeight='semibold'
                lineHeight={1}
                numberOfLines={1}
                ellipsizeMode='tail'
              >
                {blockTitle ?? ''}
              </TextComponent>
            </Box>
            <Condition condition={!loading}>
              <Row alignItems='flex-end'>
                <Show navigation={navigation} recommenderCode={recommenderCode} />
                <Spacer space={16} />
              </Row>
            </Condition>
          </Row>
        </Row>
        <Spacer height={16} />
        <FlatList
          data={recommendations}
          renderItem={({ item }) => (
            <ProductCard item={item} onItemPress={handleProductPress(item.id)} />
          )}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReached={loadRecommendations}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
        <Spacer space={20} />
      </Column>
    </Condition>
  )
})

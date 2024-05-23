import React                         from 'react'
import { ActivityIndicator }         from 'react-native'
import { FlatList }                  from 'react-native'
import { memo }                      from 'react'
import { useCallback }               from 'react'

import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Spacer }                    from '@ui/spacer'
import { TextComponent }             from '@ui/text'
import { useTheme }                  from '@ui/theme'

import { Show }                      from './components'
import { RecommendationItem }        from './recommendation-item'
import { RecommendationsBlockProps } from './recommendations-block.interfaces'
import { useRecommendations }        from './campaign-services'

export const RecommendationsBlock = memo(({ recommenderCode }: RecommendationsBlockProps) => {
  const { loadRecommendations, recommendations, blockTitle, loading } = useRecommendations({
    recommenderCode,
  })
  const theme = useTheme()

  const renderFooter = useCallback(() => {
    return loading ? (
      <Box flex={1} justifyContent='center' alignItems='center'>
        <ActivityIndicator size='large' color={theme.colors.black} />
      </Box>
    ) : null
  }, [loading])

  return (
    <Column>
      <Row>
        <Spacer space={16} />
        <Row justifyContent='space-between' flex={1}>
          <Box width='50%'>
            <TextComponent
              fontSize='smallTitle'
              fontWeight='semibold'
              lineHeight={1}
              numberOfLines={1}
              ellipsizeMode='tail'
            >
              {blockTitle}
            </TextComponent>
          </Box>
          <Row>
            <Show />
            <Spacer space={16} />
          </Row>
        </Row>
      </Row>
      <Spacer height={16} />
      <FlatList
        data={recommendations}
        renderItem={({ item }) => <RecommendationItem item={item} />}
        keyExtractor={({ id }) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={loadRecommendations}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
      <Spacer space={20} />
    </Column>
  )
})

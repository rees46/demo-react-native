import React                         from 'react'
import { ActivityIndicator }         from 'react-native'
import { Text }   from 'react-native'
import { FlatList }                  from 'react-native'
import { View }                      from 'react-native'
import { memo }                      from 'react'
import { useCallback }               from 'react'

import { RecommendationItem }        from './recommendation-item'
import { RecommendationsBlockProps } from './recommendations-block.interfaces'
import { useRecommendations }        from './campaign-services'
import { styles }                    from './recommendations-block.styles'

export const RecommendationsBlock = memo(({ recommenderCode }: RecommendationsBlockProps) => {
  const { loadRecommendations, recommendations, blockTitle, loading } = useRecommendations({
    recommenderCode,
  })

  const renderFooter = useCallback(() => {
    return loading ? <ActivityIndicator size='large' /> : null
  }, [loading])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blockTitle}</Text>
      <FlatList
        data={recommendations}
        renderItem={({ item }) => (
          <RecommendationItem
            item={{
              id: item.id,
              image: item.image_url,
              name: item.name,
              price: item.price_formatted,
            }}
          />
        )}
        keyExtractor={({ id }) => id}
        horizontal
        showsHorizontalScrollIndicator={false}
        onEndReached={loadRecommendations}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
})

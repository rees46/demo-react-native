import React, { memo, useCallback } from 'react';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import { RecommendationItem } from './recommendation-item';
import { styles } from './recommendations-block.styles';
import { useRecommendations } from './campaign-services';
import { RecommendationsBlockProps } from './recommendations-block.interfaces';

export const RecommendationsBlock = memo(
  ({ recommenderCode }: RecommendationsBlockProps) => {
    const { loadRecommendations, recommendations, blockTitle, loading } =
      useRecommendations({ recommenderCode });

    const renderFooter = useCallback(() => {
      return loading ? <ActivityIndicator size="large" /> : null;
    }, [loading]);

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
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      </View>
    );
  },
);

import React, { useState, useEffect } from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
import { RecommendationItem } from "./recommendation-item";
import { useSDK } from "@stores/rn-sdk";
import { defaultOptions } from "./recommendations-block.constants";
import { styles } from "./recommendations-block.styles";
import { RecommendationsBlockType } from "./recommendations-block.interfaces";

export const RecommendationsBlock = ({ recommenderCode }) => {
  const [recommendations, setRecommendations] = useState<
    RecommendationsBlockType[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const sdk = useSDK();
  const [blockTitle, setBlockTitle] = useState("");
  const [initialized, setInitialized] = useState(false);
  const [recommendsIds, setRecommendsIds] = useState<string[]>([]);
  const [ended, setEnded] = useState(false);

  const loadRecommendations = async () => {
    if (loading || ended) return;

    setLoading(true);
    try {
      const newRecommendations = await sdk.recommend(recommenderCode, {
        ...defaultOptions,
        page,
      });
      setBlockTitle(newRecommendations.title);
      if (
        !newRecommendations.recommends.some(({ id }) =>
          recommendsIds.includes(id)
        )
      ) {
        const idsArray: string[] = [];
        newRecommendations.recommends.forEach(
          ({ id }: RecommendationsBlockType) => {
            idsArray.push(id);
          }
        );
        setRecommendsIds((prev) => [...prev, ...idsArray]);
        setRecommendations((prev) => [
          ...prev,
          ...newRecommendations.recommends,
        ]);
        setPage(page + 1);
        setInitialized(true);
      } else {
        setEnded(true);
      }
    } catch (error) {
      console.error("Error loading recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" /> : null;
  };

  useEffect(() => {
    if (!loading && !initialized) {
      loadRecommendations();
    }
  }, [loading, initialized]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blockTitle}</Text>
      <FlatList
        data={recommendations}
        renderItem={({ item }) => (
          <RecommendationItem
            item={{
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
};

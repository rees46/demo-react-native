import { useCallback, useEffect, useState } from "react";
import { RecommendationsBlockType } from "../../recommendations-block.interfaces";
import { defaultOptions } from "../../recommendations-block.constants";
import { useSDK } from "@stores/rn-sdk";
import { UseRecommendations } from "./use-recommendations.interfaces";

export const useRecommendations: UseRecommendations = ({ recommenderCode }) => {
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

  const loadRecommendations = useCallback(async () => {
    if (loading || ended) return;

    setLoading(true);
    try {
      const newRecommendations = await sdk.recommend(recommenderCode, {
        ...defaultOptions,
        page,
      });
      setBlockTitle(newRecommendations.title);
      if (
        !(newRecommendations.recommends as RecommendationsBlockType[]).some(
          ({ id }) => recommendsIds.includes(id),
        )
      ) {
        const idsArray: string[] = [];
        newRecommendations.recommends.forEach(
          ({ id }: RecommendationsBlockType) => {
            idsArray.push(id);
          },
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
  }, [loading, ended, sdk, recommenderCode, page, recommendsIds]);

  useEffect(() => {
    if (!loading && !initialized) {
      loadRecommendations();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, initialized]);

  return {
    loading,
    recommendations,
    blockTitle,
    loadRecommendations,
  };
};

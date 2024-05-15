import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { ProductSearch } from "@fragments/product-search";
import { RecommendationsBlock } from "@fragments/recommendations-block";
import { styles } from "./home.styles";

const HomeScreen = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <View style={styles.container}>
      <ProductSearch />
      <Text>Home Screen</Text>
      <RecommendationsBlock />
    </View>
  );
};

export default HomeScreen;

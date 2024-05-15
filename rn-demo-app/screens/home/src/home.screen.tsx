import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { ProductSearch } from "@fragments/product-search";
import { RecommendationsBlock } from "@fragments/recommendations-block";
import { styles } from "./home.styles";
import { useTranslation } from "react-i18next";

const HomeScreen = () => {
  const sdk = useSDK();
  const { t } = useTranslation();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <View style={styles.container}>
      <ProductSearch />
      <Text>{t("screens.home.title")}</Text>
      <RecommendationsBlock />
    </View>
  );
};

export default HomeScreen;

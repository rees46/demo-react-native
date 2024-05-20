import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { ProductSearch } from "@fragments/product-search";
import { RecommendationsBlock } from "@fragments/recommendations-block";
import { styles } from "./home.styles";
import { useTranslation } from "react-i18next";
import { recommenderCodes } from "./home.constants";

const HomeScreen = ({ navigation }) => {
  const sdk = useSDK();
  const { t } = useTranslation();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProductSearch navigation={navigation} viewOnly />
      {recommenderCodes.map((code) => (
        <RecommendationsBlock recommenderCode={code} key={code} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

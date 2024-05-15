import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { useTranslation } from "react-i18next";

export const RecommendationsBlock = () => {
  const { t } = useTranslation();
  const sdk = useSDK();

  return (
    <View>
      <Text>{t("fragments.recommendations-block.title")}</Text>
    </View>
  );
};

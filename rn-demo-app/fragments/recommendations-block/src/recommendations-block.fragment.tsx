import React from "react";
import { View } from "react-native";
import { Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";

export const RecommendationsBlock = () => {
  const sdk = useSDK();

  return (
    <View>
      <Text>Recommendations</Text>
    </View>
  );
};

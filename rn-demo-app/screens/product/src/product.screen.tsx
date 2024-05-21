import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { styles } from "./product.styles";
import { useTranslation } from "react-i18next";

const ProductScreen = () => {
  const sdk = useSDK();
  const { t } = useTranslation();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{t("screens.product.title")}</Text>
    </View>
  );
};

export default ProductScreen;
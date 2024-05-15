import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { styles } from "./catalog.styles";

const CatalogScreen = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Catalog Screen</Text>
    </View>
  );
};

export default CatalogScreen;

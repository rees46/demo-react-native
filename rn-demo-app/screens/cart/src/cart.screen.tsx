import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { styles } from "./cart.styles";

const CartScreen = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;

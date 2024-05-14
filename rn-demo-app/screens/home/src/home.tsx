import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlankElement } from "@fragments/blank-fragment";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BlankElement />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

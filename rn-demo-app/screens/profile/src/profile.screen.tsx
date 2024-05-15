import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useSDK } from "@stores/rn-sdk";
import { styles } from "./profile.styles";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
  const sdk = useSDK();
  const { t } = useTranslation();

  useEffect(() => {
    sdk.track("wish", []);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{t("screens.profile.title")}</Text>
    </View>
  );
};

export default ProfileScreen;

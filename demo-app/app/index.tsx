import { View, Text } from "react-native";

// @ts-ignore
import REES46 from "@rees46/react-native-sdk";

const sdk = new REES46("357382bf66ac0ce2f1722677c59511", "android", true);
export default function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

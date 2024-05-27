import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const getProductCardWidthHelper = () => {
  return width  / 2
}


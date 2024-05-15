import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: "white",
  },
  searchbar: {
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  categoriesList: {
    marginBottom: 16,
  },
  category: {
    fontSize: 16,
    color: "blue",
    marginBottom: 4,
  },
  itemsList: {
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalResults: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
  },
});

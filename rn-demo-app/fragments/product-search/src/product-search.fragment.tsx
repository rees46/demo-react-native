import React from "react";
import { View, Text, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { useProductSearch } from "./campaing-services";
import { useFocus } from "./utils/use-focus.hook";
import { Condition } from "@ui/condition";
import { styles } from "./product-search.styles";

export const ProductSearch = () => {
  const { searchQuery, setSearchQuery, totalResults, items, categories } =
    useProductSearch();
  const { focus: searchFocus, ...focusedProps } = useFocus();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Найти"
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchbar}
        {...focusedProps}
      />
      <Condition condition={searchFocus}>
        <View>
          <Condition condition={!!totalResults}>
            <View>
              <Text style={styles.header}>Подходящие товары</Text>
              <FlatList
                data={items}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      {item.price_full_formatted}
                    </Text>
                  </View>
                )}
                keyExtractor={(item) => item.id}
                style={styles.itemsList}
              />
              <Text style={styles.header}>Категории</Text>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <Text style={styles.category}>{item.name}</Text>
                )}
                keyExtractor={(item) => item.id}
                style={styles.categoriesList}
              />
              <Text style={styles.totalResults}>
                Всего по запросу найдено: {totalResults}
              </Text>
            </View>
          </Condition>
          <Condition condition={!totalResults}>
            <View>
              <Text>Ничего не найдено</Text>
            </View>
          </Condition>
        </View>
      </Condition>
    </View>
  );
};

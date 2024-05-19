import React, {useRef} from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { useProductSearch } from "./campaing-services";
import { Condition } from "@ui/condition";
import { styles } from "./product-search.styles";
import { useTranslation } from "react-i18next";
import { appRoutes } from '@navigations/constants'

export const ProductSearch = ({ navigation }) => {
  const { searchQuery, setSearchQuery, totalResults, items, categories } =
    useProductSearch();
  const { t } = useTranslation();
  const searchbarRef = useRef(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate(appRoutes.Product.name, { productId });
  };

  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate(appRoutes.Category.name, { categoryId });
  };

  const handleOutsidePress = () => {
    if (searchbarRef.current && searchbarRef.current.isFocused()) {
      searchbarRef.current.blur();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
    <View style={styles.container}>
      <Searchbar
        ref={searchbarRef}
        placeholder={t("fragments.product-search.placeholder")}
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <Condition condition={!!searchbarRef.current && searchbarRef.current.isFocused()}>
        <View>
          <Condition condition={!!totalResults}>
            <View>
              <Text style={styles.header}>
                {t("fragments.product-search.products-title")}
              </Text>
              <FlatList
                data={items}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.item} onPress={() => handleProductPress(item.id)}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      {item.price_full_formatted}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                style={styles.itemsList}
              />
              <Text style={styles.header}>
                {t("fragments.product-search.categories-title")}
              </Text>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
                    <Text style={styles.category}>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                style={styles.categoriesList}
              />
              <Text style={styles.totalResults}>
                {t("fragments.product-search.total", { total: totalResults })}
              </Text>
            </View>
          </Condition>
          <Condition condition={!totalResults}>
            <View>
              <Text>{t("fragments.product-search.empty")}</Text>
            </View>
          </Condition>
        </View>
      </Condition>
    </View>
    </TouchableWithoutFeedback>
  );
};

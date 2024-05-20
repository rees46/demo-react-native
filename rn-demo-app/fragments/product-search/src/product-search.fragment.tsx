import React, { useEffect, useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity, SectionList } from "react-native";
import { Searchbar } from "react-native-paper";
import { useProductSearch } from "./campaing-services";
import { Condition } from "@ui/condition";
import { useTranslation } from "react-i18next";
import { appRoutes } from "@navigations/constants";
import { getStyles } from "./product-search.styles";
import { ItemType, ProductSearchProps } from "./product-search.interfaces";

export const ProductSearch = ({
  navigation,
  viewOnly = true,
}: ProductSearchProps) => {
  const { searchQuery, setSearchQuery, totalResults, items, categories } =
    useProductSearch();
  const { t } = useTranslation();
  const searchbarRef = useRef<any>(null);
  const [styles] = useState(getStyles(viewOnly));

  useEffect(() => {
    if (searchbarRef.current && !viewOnly) {
      searchbarRef.current.focus();
    }
  }, [viewOnly]);

  const handleFocus = () => {
    if (searchbarRef.current && viewOnly) {
      navigation.navigate(appRoutes.ProductSearch.name);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleProductPress = (productId: string) => {
    navigation.navigate(appRoutes.Product.name, { productId });
  };

  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate(appRoutes.Category.name, { categoryId });
  };

  const sections = useMemo(
    () => [
      {
        title: t("fragments.product-search.products-title"),
        data: items,
        keyExtractor: (item: ItemType) => item.id,
        renderItem: ({ item }: { item: ItemType }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleProductPress(item.id)}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price_full_formatted}</Text>
          </TouchableOpacity>
        ),
      },
      {
        title: t("fragments.product-search.categories-title"),
        data: categories,
        keyExtractor: (item: ItemType) => item.id,
        renderItem: ({ item }: { item: ItemType }) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => handleCategoryPress(item.id)}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ),
      },
    ],
    [t, items, categories]
  );

  return (
    <View style={styles.container}>
      <Searchbar
        ref={searchbarRef}
        placeholder={t("fragments.product-search.placeholder")}
        onChangeText={viewOnly ? undefined : handleSearch}
        value={searchQuery}
        style={styles.searchbar}
        onFocus={handleFocus}
        onClearIconPress={() => navigation.navigate(appRoutes.Home.name)}
      />
      <Condition condition={!viewOnly}>
        <Condition condition={!!totalResults}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
            keyboardShouldPersistTaps="always"
          />
        </Condition>
        <Condition condition={!totalResults}>
          <View>
            <Text>{t("fragments.product-search.empty")}</Text>
          </View>
        </Condition>
      </Condition>
    </View>
  );
};

import React                  from 'react'
import { SectionList }        from 'react-native'
import { Text }               from 'react-native'
import { TouchableOpacity }   from 'react-native'
import { View }               from 'react-native'
import { Searchbar }          from 'react-native-paper'
import { useCallback }        from 'react'
import { useEffect }          from 'react'
import { useMemo }            from 'react'
import { useRef }             from 'react'
import { useState }           from 'react'
import { useTranslation }     from 'react-i18next'

import { APP_ROUTES }         from '@navigations/constants'
import { Condition }          from '@ui/condition'

import { ItemType }           from './product-search.interfaces'
import { ProductSearchProps } from './product-search.interfaces'
import { useProductSearch }   from './campaign-services'
import { getStyles }          from './product-search.styles'

export const ProductSearch = ({ navigation, viewOnly = true }: ProductSearchProps) => {
  const { searchQuery, setSearchQuery, totalResults, items, categories } = useProductSearch()
  const { t } = useTranslation()
  const searchbarRef = useRef<any>(null)
  const [styles] = useState(getStyles(viewOnly))

  useEffect(() => {
    if (searchbarRef.current && !viewOnly) {
      searchbarRef.current.focus()
    }
  }, [viewOnly])

  const handleFocus = useCallback(() => {
    if (searchbarRef.current && viewOnly) {
      navigation.navigate(APP_ROUTES.PRODUCT_SEARCH.name)
    }
  }, [navigation, viewOnly])

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query)
    },
    [setSearchQuery]
  )

  const handleProductPress = useCallback(
    (productId: string) => {
      navigation.navigate(APP_ROUTES.PRODUCT.name, { productId })
    },
    [navigation]
  )

  const handleCategoryPress = useCallback(
    (categoryId: string) => {
      navigation.navigate(APP_ROUTES.CATEGORY.name, { categoryId })
    },
    [navigation]
  )

  const sections = useMemo(
    () => [
      {
        title: t('fragments.product-search.products-title'),
        data: items,
        keyExtractor: (item: ItemType) => item.id,
        renderItem: ({ item }: { item: ItemType }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleProductPress(item.id)}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price_full_formatted}</Text>
          </TouchableOpacity>
        ),
      },
      {
        title: t('fragments.product-search.categories-title'),
        data: categories,
        keyExtractor: (item: ItemType) => item.id,
        renderItem: ({ item }: { item: ItemType }) => (
          <TouchableOpacity style={styles.category} onPress={() => handleCategoryPress(item.id)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ),
      },
    ],
    [
      t,
      items,
      categories,
      styles.item,
      styles.itemName,
      styles.itemPrice,
      styles.category,
      handleProductPress,
      handleCategoryPress,
    ]
  )

  return (
    <View style={styles.container}>
      <Searchbar
        ref={searchbarRef}
        placeholder={t('fragments.product-search.placeholder')}
        onChangeText={viewOnly ? undefined : handleSearch}
        value={searchQuery}
        style={styles.searchbar}
        onFocus={handleFocus}
        onClearIconPress={() => navigation.navigate(APP_ROUTES.HOME.name)}
      />
      <Condition condition={!viewOnly}>
        <Condition condition={!!totalResults}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
            keyboardShouldPersistTaps='always'
          />
        </Condition>
        <Condition condition={!totalResults}>
          <View>
            <Text>{t('fragments.product-search.empty')}</Text>
          </View>
        </Condition>
      </Condition>
    </View>
  )
}

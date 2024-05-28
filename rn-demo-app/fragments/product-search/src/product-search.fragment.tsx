import React                      from 'react'
import { SectionList }            from 'react-native'
import { TextInput }              from 'react-native'
import { useCallback }            from 'react'
import { useEffect }              from 'react'
import { useMemo }                from 'react'
import { useRef }                 from 'react'
import { useTranslation }         from 'react-i18next'

import { APP_ROUTES }             from '@navigations/constants'
import { ButtonComponent }        from '@ui/button'
import { Condition }              from '@ui/condition'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Spacer }                 from '@ui/spacer'
import { TextComponent }          from '@ui/text'
import { useKeyboardHeight }      from '@shared/utils'

import { CategoryItem }           from './components'
import { ProductItem }            from './components'
import { SearchComponent }        from './components'
import { ItemType }               from './product-search.interfaces'
import { ProductSearchProps }     from './product-search.interfaces'
import { useProductSearch }       from './campaign-services'
import { getSearchContentHeight } from './utils'

export const ProductSearch = ({ navigation }: ProductSearchProps) => {
  const { searchQuery, setSearchQuery, totalResults, items, categories } = useProductSearch()
  const { t } = useTranslation()
  const searchbarRef = useRef<TextInput>(null)
  const keyboardHeight = useKeyboardHeight()

  useEffect(() => {
    if (searchbarRef.current) {
      searchbarRef.current.focus()
    }
  }, [])

  const handleProductPress = useCallback(
    (productId: string) => {
      navigation.navigate(APP_ROUTES.PRODUCT.name, { id: productId })
    },
    [navigation]
  )

  const handleCategoryPress = useCallback(
    (categoryId: string) => {
      navigation.navigate(APP_ROUTES.CATEGORY.name, { categoryId })
    },
    [navigation]
  )

  const handleClose = useCallback(() => navigation.navigate(APP_ROUTES.HOME.name), [navigation])

  const handleSearchSubmit = useCallback(
    () => navigation.navigate(APP_ROUTES.SEARCH_RESULTS.name, { searchQuery }),
    [navigation, searchQuery]
  )

  const sections = useMemo(
    () => [
      {
        title: t('fragments.product-search.categories-title').toUpperCase(),
        data: categories,
        keyExtractor: (item: ItemType) => item.id,
        renderItem: ({ item }: { item: ItemType }) => (
          <CategoryItem item={item} onPress={handleCategoryPress} />
        ),
      },
      {
        title: t('fragments.product-search.products-title').toUpperCase(),
        data: items,
        keyExtractor: (item: ItemType) => item.id,
        renderItem: ({ item }: { item: ItemType }) => (
          <ProductItem item={item} onPress={handleProductPress} />
        ),
      },
    ],
    [t, items, categories, handleProductPress, handleCategoryPress]
  )

  return (
    <Column>
      <Spacer height={12} />
      <Row>
        <Spacer space={12} />
        <Box flex={1}>
          <SearchComponent
            ref={searchbarRef}
            value={searchQuery}
            onSubmitEditing={handleSearchSubmit}
            onChangeText={setSearchQuery}
            placeholder={t('fragments.product-search.placeholder')}
            onClose={handleClose}
            clearable
          />
        </Box>
        <Spacer space={12} />
      </Row>
      <Box height={getSearchContentHeight(keyboardHeight)}>
        <Condition condition={!!totalResults}>
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => item.id + index}
            renderSectionHeader={({ section: { title } }) => (
              <Column>
                <Spacer height={12} />
                <Box height={1} backgroundColor='lightGray' fullWidth />
                <Row>
                  <Spacer space={16} />
                  <Column>
                    <Spacer height={8} />
                    <TextComponent fontColor='gray' fontSize='smallTitle' lineHeight={1.3}>
                      {title}
                    </TextComponent>
                  </Column>
                  <Spacer space={16} />
                </Row>
              </Column>
            )}
            keyboardShouldPersistTaps='always'
          />
          <Box
            flexDirection='row'
            fullWidth
            height={70}
            justifyContent='center'
            alignItems='center'
            backgroundColor='white'
          >
            <Spacer space={16} />
            <ButtonComponent
              variant='secondary'
              title={t('fragments.product-search.total', { total: totalResults })}
              onPress={handleSearchSubmit}
            />
            <Spacer space={16} />
          </Box>
        </Condition>
        <Condition condition={!totalResults}>
          <Row>
            <Spacer space={16} />
            <Column>
              <Spacer height={12} />
              <TextComponent>{t('fragments.product-search.empty')}</TextComponent>
            </Column>
            <Spacer space={16} />
          </Row>
        </Condition>
      </Box>
    </Column>
  )
}

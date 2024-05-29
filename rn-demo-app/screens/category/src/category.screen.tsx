import React               from 'react'

import { CategoryProducts } from '@fragments/category-products'
import { ScreenLayout }    from '@fragments/screen-layout'
import { Spacer }           from '@ui/spacer'

import { CategoryProps }    from './category.interfaces'

const SearchResultsScreen = ({ navigation, route }: CategoryProps) => {
  const { categoryId } = route.params

  return (
    <ScreenLayout navigation={navigation} scrollable={false} menuVariant='menu'>
      <Spacer height={16} />
      <CategoryProducts navigation={navigation} categoryId={categoryId} />
    </ScreenLayout>
  )
}

export default SearchResultsScreen

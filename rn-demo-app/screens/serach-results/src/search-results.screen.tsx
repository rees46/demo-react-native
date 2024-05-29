import React                     from 'react'

import { ScreenLayout }          from '@fragments/screen-layout'
import { SearchResultsFragment } from '@fragments/search-results'
import { Spacer }                 from '@ui/spacer'

import { SearchResultsProps }    from './search-results.interfaces'

const SearchResultsScreen = ({ navigation, route }: SearchResultsProps) => {
  const { searchQuery } = route.params

  return (
    <ScreenLayout navigation={navigation} scrollable={false} menuVariant='menu'>
      <Spacer height={16} />
      <SearchResultsFragment navigation={navigation} searchQuery={searchQuery} />
    </ScreenLayout>
  )
}

export default SearchResultsScreen

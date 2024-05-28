import React                    from 'react'

import { SearchResultsProps }   from './serach-results.interfaces'
import {useFullSearch} from "./campaign-services";
import { ProductList }                 from '@fragments/product-list'
import {EmptySearchComponent} from "./components";
import { Condition } from '@ui/condition';

export const SearchResultsFragment = ({ navigation, searchQuery }: SearchResultsProps) => {
  const {loadResults, loading, products, total} = useFullSearch({searchQuery})

  return <>
    <Condition condition={products.length > 0}>
      <ProductList
        products={products}
        navigation={navigation}
        onLoad={loadResults}
        total={total}
      />
    </Condition>
    <Condition condition={!loading && products.length === 0}>
      <EmptySearchComponent navigation={navigation} />
    </Condition>
  </>
}


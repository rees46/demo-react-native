import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';
import {useSDK} from '../../../stores';
import {SEARCH_TYPE} from './product-search.constants.ts';

export const ProductSearch = () => {
  const sdk = useSDK();

  useEffect(() => {
    let search_query = 'phone';

    sdk
      .search({
        type: SEARCH_TYPE,
        search_query: search_query,
      })
      .then(res => {
        console.log('response: ', res);
      });
  }, []);

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

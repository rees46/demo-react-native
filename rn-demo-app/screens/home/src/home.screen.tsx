import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useSDK } from '@stores/rn-sdk';
import { ProductSearch } from '@fragments/product-search';
import { RecommendationsBlock } from '@fragments/recommendations-block';
import { styles } from './home.styles';
import { recommenderCodes } from './home.constants';

const HomeScreen = ({ navigation }) => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track('wish', []);
  }, [sdk]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ProductSearch navigation={navigation} viewOnly />
      {recommenderCodes.map(code => (
        <RecommendationsBlock recommenderCode={code} key={code} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

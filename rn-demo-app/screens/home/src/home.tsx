import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSDK} from '../../../stores';
import {ProductSearch} from '../../../fragments/product-search';

const HomeScreen = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track('wish', []);
  }, []);

  return (
    <View style={styles.container}>
      <ProductSearch />
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

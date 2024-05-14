import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSDK} from '../../../stores';
import {NewBlankElement} from '@fragments/new-blank-fragment';

const CatalogScreen = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track('wish', []);
  }, []);

  return (
    <View style={styles.container}>
      <NewBlankElement />
      <Text>Catalog Screen</Text>
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

export default CatalogScreen;

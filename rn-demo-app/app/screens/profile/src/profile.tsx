import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSDK} from '../../../stores';

const ProfileScreen = () => {
  const sdk = useSDK();

  useEffect(() => {
    sdk.track('wish', []);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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

export default ProfileScreen;
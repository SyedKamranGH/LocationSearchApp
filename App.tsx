import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import MapScreen from './src/screens/MapScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MapScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

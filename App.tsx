import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import MapScreen from './src/screens/MapScreen';

/**
 * Main application component.
 * Renders the core app layout with MapScreen as the main content.
 *
 * @returns {React.ReactElement} The rendered App component
 */

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

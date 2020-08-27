import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Login from './src/screens/login';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.SafeArea}>
        <Login/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
});

export default App;

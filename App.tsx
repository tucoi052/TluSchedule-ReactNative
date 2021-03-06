import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ScheduleContextProvider} from './utils/contextprovider';
import Route from './src/route/route';
const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.SafeArea}>
        <ScheduleContextProvider>
          <NavigationContainer>
            <Route />
          </NavigationContainer>
        </ScheduleContextProvider>
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

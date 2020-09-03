import React from 'react';
import Login from './screens/login';
import Draw from './screens/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useContext} from 'react';
import ScheduleContext from '../utils/contextprovider';
import {View, ActivityIndicator} from 'react-native';
const Stack = createStackNavigator();

const Route = () => {
  const context = useContext(ScheduleContext);
  // console.log(context);
  if (context.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {context.signed ? (
        <Stack.Screen
          name="Home"
          component={Draw}
          options={{headerShown: false}}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Route;

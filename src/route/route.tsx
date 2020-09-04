import React from 'react';
import Login from '../screens/login';
import Draw from '../draw/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {useContext} from 'react';
import ScheduleContext from '../../utils/contextprovider';
import {View} from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';
const Stack = createStackNavigator();

const Route = () => {
  const context = useContext(ScheduleContext);
  if (context.loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <PacmanIndicator color="#5B80FF" />
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

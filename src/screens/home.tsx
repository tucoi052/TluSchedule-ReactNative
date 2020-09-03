import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllSchedule from './allschedule';
import ToDaySchedule from './todayschedule';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tab = createMaterialBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={false}
      shifting={true}
      backBehavior={'none'}
      initialRouteName="Home"
      activeColor='blue'
      inactiveColor='gray'
      barStyle={{
        borderStyle: 'solid',
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        backgroundColor: 'transparent',
        elevation: 0.7,
      }}>
      <Tab.Screen
        name="Hôm nay"
        component={ToDaySchedule}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Tất cả"
        component={AllSchedule}
        options={{

          tabBarIcon: 'book',
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

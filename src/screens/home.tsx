import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Login from './login';
import AllSchedule from './allschedule';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
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
        elevation: 1,
      }}>
      <Tab.Screen
        name="All"
        component={AllSchedule}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="a"
        component={Login}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;

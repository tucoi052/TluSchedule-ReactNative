import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllSchedule from '../screens/allschedule';
import ToDaySchedule from '../screens/todayschedule';

const Tab = createMaterialBottomTabNavigator();
const Stack = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={false}
      shifting={true}
      backBehavior={'none'}
      activeColor='#5B80FF'
      inactiveColor='gray'
      barStyle={{
        borderStyle: 'solid',
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
        backgroundColor: 'transparent',
        elevation: 1,
      }}>
      <Tab.Screen
        name="Hôm nay"
        component={ToDaySchedule}
        options={{
          tabBarIcon: 'calendar',
        }}
      />
      <Tab.Screen
        name="Tất cả"
        component={AllSchedule}
        options={{
          tabBarIcon: 'calendar-month',
        }}
      />
    </Tab.Navigator>
  );
};

export default Stack;

import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';
import Stack from '../route/tab';
import DrawerContent from './drawercontext';

const Drawer = createDrawerNavigator();
const Draw = () => {
  const [initRender, setInitRender] = useState(true);

  useEffect(() => {
    setInitRender(false);
  }, [initRender]);

  return (
    <Drawer.Navigator
      drawerStyle={{width: initRender ? 0 : '70%'}}
      minSwipeDistance={20}
      drawerPosition={'left'}
      drawerType={'front'}
      drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={Stack} />
    </Drawer.Navigator>
  );
};

export default Draw;

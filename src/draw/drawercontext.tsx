import React from 'react'
import { useContext } from "react";
import ScheduleContext from "../../utils/contextprovider";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, StyleSheet } from "react-native";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';


const DrawerContent = (props: any) => {
    const context: any = useContext(ScheduleContext);
    const info = context.info;
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              style={{
                backgroundColor: 'transparent',
              }}
              source={{
                uri:
                  'https://icon-library.com/images/avatar-icon-png/avatar-icon-png-15.jpg',
              }}
              size={50}
            />
            <Title style={styles.title}>{info?.name}</Title>
            <Caption style={styles.caption}>{info?.idCode}</Caption>
            <Caption style={styles.caption}>{info?.class}</Caption>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="user" color={color} size={size} />
              )}
              label="Thông tin cá nhân"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="phone" color={color} size={size} />
              )}
              label="Liên hệ giảng viên"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog" color={color} size={size} />
              )}
              label="Cài đặt"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="check" color={color} size={size} />
              )}
              label="Cập nhật thông tin"
              onPress={async () => {
                // if ((await getUpdate()) == '1') {
                  // await context.update();
                  // console.log('update');
                // }
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="sign-out" color={color} size={size} />
              )}
              label="Đăng xuất"
              onPress={() => {
                context.logout();
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    );
  };


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

  export default DrawerContent;
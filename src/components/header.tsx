import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = ({navigation, title}:any) => {
    return (
        <View style={{height: '12%'}}>
        <Image
          source={require('../assets/home_top.png')}
          style={{height: '100%'}}
        />
        <TouchableOpacity
          style={{position: 'absolute', bottom:5, width:'20%'}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Icon name="align-justify" size={25} style={{marginLeft:15, color:'white'}} />
        </TouchableOpacity>
        <View style={{width:'100%', flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
          <Text
            style={{position: 'absolute', bottom: 5, fontSize: 22,color:'white'}}>
            {title}
          </Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Header;

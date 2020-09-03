import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dim = Dimensions.get('screen');

const CardSchedule = ({key, item}: any) => {
  return (
    <Card
      key={key}
      elevation={8}
      style={{
        marginHorizontal: Dim.width * 0.06,
        marginVertical: 5,
        height: Dim.height * 0.12,
      }}
      onPress={() => {
        console.log(item);
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            width: 100,
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: Dim.width * 0.05,
          }}>
          <Text style={{fontSize: 17, color: 'blue'}}>
            Tiết: {item['Tiet_hoc']}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            {item['Ten_mon']}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="map-marker"
              size={20}
              color="red"
              style={{marginRight: 5}}
            />
            <Text style={{fontSize: 16}}>{item['Phong_hoc']}</Text>
          </View>
        </View>
      </View>
    </Card>
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

export default CardSchedule;

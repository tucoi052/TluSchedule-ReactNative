import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ScheduleContext from '../../utils/contextprovider';
import { getInDay} from '../../utils/api';
import Header from '../components/header';
import CardSchedule from '../components/card';
const ToDaySchedule = ({navigation}: any) => {
  const context = useContext(ScheduleContext);
  const data = getInDay(
    new Date('2020-06-11'),
    context.schedules,
  );
  return (
    <>
      <Header navigation={navigation} title={'Lịch học hôm nay'} />
      {data.length ? (
        <ScrollView style={{flex: 1, height: '100%'}}>
          <View style={{marginTop: 15}}>
            {data.map((item, key) => (
              <CardSchedule key={key} item={item} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <Text>Không</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ToDaySchedule;

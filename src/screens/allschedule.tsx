import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ScheduleContext from '../../utils/contextprovider';
import Header from '../components/header';
import CardSchedule from '../components/card';
import { getAllSchedule } from '../../utils/service';
const AllSchedule = ({navigation}: any) => {
  const context = useContext(ScheduleContext);
  const data = getAllSchedule(context.schedules);
  return (
    <>
      <Header navigation={navigation} title={'Lịch học theo tuần'} />
      {data.length ? (
        <ScrollView style={{flex: 1}}>
          {data[0].map((day: string, indexDay: number) => (
            <View style={{width: '100%'}} key={indexDay}>
              <View style={styles.containerdate}>
                <Text style={styles.textdate}>{day}</Text>
              </View>
              <View style={styles.containercard}>
                {data[1][indexDay].map(
                  (item: {[x: string]: string}, indexSubject: number) => (
                    <CardSchedule key={indexSubject} item={item} />
                  ),
                )}
              </View>
            </View>
          ))}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerdate: {
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  containercard: {
    marginBottom: 20,
    flex: 1,
  },
  textdate: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default AllSchedule;

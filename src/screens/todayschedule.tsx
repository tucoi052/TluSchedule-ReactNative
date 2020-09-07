import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ScheduleContext from '../../utils/contextprovider';
import Header from '../components/header';
import CardSchedule from '../components/card';
import timeline from '../../utils/timeline';
import {getInDay} from '../../utils/service';
const ToDaySchedule = ({navigation}: any) => {
  const context = useContext(ScheduleContext);
  const data = getInDay(new Date('2020-06-11'), context.schedules);
  const [itemshow, setItemShow] = useState<any>(null);
  return (
    <>
      <Header navigation={navigation} title={'Lịch học hôm nay'} />
      <Modal animationType="fade" transparent={true} visible={!!itemshow}>
        <View style={styles.container}>
          <View style={styles.containermodal}>
            <Text>{itemshow?.Ten_mon}</Text>
            {itemshow?.Tiet_hoc.toString()
              .split(',')
              .map((tiet: number, index: number) => (
                <View key={index}>
                  <View style={{flexDirection: 'row'}}>
                    <Text>
                      Tiết {tiet} {timeline[tiet].start.hour}:
                      {timeline[tiet].start.minute}
                    </Text>
                  </View>
                </View>
              ))}

            <Text>Địa điểm: {itemshow?.Phong_hoc}</Text>

            <TouchableOpacity
              onPress={() => {
                setItemShow(null);
              }}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {!!data ? (
        <ScrollView style={styles.scrollview}>
          <View style={styles.containercard}>
            {data.map((item: {[x: string]: string}, index: number) => (
              <CardSchedule key={index} item={item} tap={setItemShow} />
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
  containercard: {
    marginTop: 15,
    marginBottom: 15,
  },
  scrollview: {
    flex: 1,
    height: '100%',
  },
  containermodal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.3,
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    borderRadius: 40,
  },
});

export default ToDaySchedule;

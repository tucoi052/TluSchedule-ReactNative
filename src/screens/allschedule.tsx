import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import ScheduleContext from '../../utils/contextprovider';
import { getAllSchedule } from '../../utils/api';

const AllSchedule = () => {
  // useEffect(() => {
  //   getc();
  //   console.log('1');
  // }, []);

  // const getc = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('schedules');
  //     if (value !== null) {
  //       const schedules = getAllSchedule(JSON.parse(value));
  //       setData(schedules);
  //     }
  //   } catch (error) {}
  // };
  // let i = 0;
  // const [data, setData] = useState<any[]>([[], []]);

  const context = useContext(ScheduleContext);
  const data = getAllSchedule(JSON.parse(JSON.stringify(context.schedules)));
  return (
    <>
      <Image source={require('./../../assets/home_top.png')} />
      <ScrollView>
        {data[0] ? (
          data[0].map((day: string, indexDay: number) => (
            <View key={indexDay}>
              <View style={{marginLeft: '20%'}}>
                <Text>{day}</Text>
              </View>

              {data[1][indexDay].map(
                (item: {[x: string]: string}, indexSubject: number) => (
                  <TouchableOpacity key={indexSubject} onPress={() => {}}>
                    <View style={{marginLeft: '20%'}}>
                      <Text>{item['Ten_mon']}</Text>
                      <Text>{item['Phong_hoc']}</Text>
                    </View>
                  </TouchableOpacity>
                ),
              )}
            </View>
          ))
        ) : (
          <View style={styles.container}>
            <Text>Không</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllSchedule;

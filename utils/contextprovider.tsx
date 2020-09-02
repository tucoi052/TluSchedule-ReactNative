import React, {useState, useEffect} from 'react';
import {getSchedule, getAllSchedule, getInDay, getLogin} from './api';
import AsyncStorage from '@react-native-community/async-storage';

const ScheduleContext = React.createContext({
  schedules: null,
  info: null,
  signed: false,
  loading: true,
  all: [[], []],
  inDay: [],
  login: async (user: string, pass: string): Promise<boolean> => {
    return false;
  },
  logout: () => {},
});

const ScheduleContextProvider = ({children}: any) => {
  const [schedules, setSchedules] = useState(null);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState<any[]>([[], []]);
  const [inDay, setInDay] = useState<any[]>([]);

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storageSchedules = await AsyncStorage.getItem('schedules');
        const storageInfo = await AsyncStorage.getItem('info');

        if (storageSchedules && storageInfo) {
          // setSchedules(JSON.parse(storageSchedules));
          // setInfo(JSON.parse(storageInfo));
          setLoading(false);
        } else if (!storageSchedules && !storageInfo) {
          setLoading(false);
        }
      } catch (error) {}
    };

    loadStorageData();
  }, []);

  const login = async (user: string, pass: string) => {
    // const info = await getLogin(user, pass);
    // if (info.length) {
      const schedules = await getSchedule();
      // console.log(schedules)
      // console.log(getAllSchedule(schedules))
      // console.log(getInDay(new Date(), schedules))
      setSchedules(JSON.parse(JSON.stringify(schedules)));
      setAll(getAllSchedule(JSON.parse(JSON.stringify(schedules))));
      setInDay(getInDay(new Date(), JSON.parse(JSON.stringify(schedules))));
      // setInfo(JSON.parse(JSON.stringify(info)));
      try {
        await AsyncStorage.setItem('schedules', JSON.stringify(schedules));
        await AsyncStorage.setItem('info', JSON.stringify(info));
      } catch (error) {
        console.log(error);
      }
      return true;
    // }
    // return false;
  };

  const logout = () => {
    AsyncStorage.clear().then(() => {
      setSchedules(null);
      setInfo(null);
    });
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules,
        info,
        signed: !!info,
        loading,
        all: [[], []],
        inDay: [],
        login,
        logout,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export {ScheduleContextProvider};
export default ScheduleContext;

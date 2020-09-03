import React, {useState, useEffect} from 'react';
import {getSchedule, getLogin, getUpdate} from './api';
import AsyncStorage from '@react-native-community/async-storage';

const ScheduleContext = React.createContext({
  schedules: null,
  info: null,
  signed: false,
  loading: true,
  login: async (user: string, pass: string): Promise<boolean> => {
    return true;
  },
  logout: () => {},
  update: async () => {},
});

const ScheduleContextProvider = ({children}: any) => {
  const [schedules, setSchedules] = useState(null);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storageSchedules = await AsyncStorage.getItem('schedules');
        const storageInfo = await AsyncStorage.getItem('info');

        if (storageSchedules && storageInfo) {
          setSchedules(JSON.parse(storageSchedules));
          setInfo(JSON.parse(storageInfo));
          setLoading(false);
        } else if (!storageSchedules && !storageInfo) {
          setLoading(false);
        }
      } catch (error) {}
    };

    loadStorageData();
  }, []);

  const login = async (user: string, pass: string) => {
    const info = await getLogin(user, pass);
    if (!!info) {
      const schedules = await getSchedule();
      setSchedules(JSON.parse(JSON.stringify(schedules)));
      setInfo(JSON.parse(JSON.stringify(info)));
      try {
        await AsyncStorage.setItem('schedules', JSON.stringify(schedules));
        await AsyncStorage.setItem('info', JSON.stringify(info));
      } catch (error) {
        console.log(error);
        return false;
      }
      return true;
    }
    else return false
  };

  const logout = () => {
    AsyncStorage.clear().then(() => {
      setSchedules(null);
      setInfo(null);
    });
  };

  const update = async () => {
    const schedules = await getSchedule();
    setSchedules(JSON.parse(JSON.stringify(schedules)));
    try {
      await AsyncStorage.setItem('schedules', JSON.stringify(schedules));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScheduleContext.Provider
      value={{
        schedules,
        info,
        signed: !!info,
        loading,
        login,
        logout,
        update,
      }}>
      {children}
    </ScheduleContext.Provider>
  );
};

export {ScheduleContextProvider};
export default ScheduleContext;

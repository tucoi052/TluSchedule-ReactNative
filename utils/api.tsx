import axios from 'axios';

const api = axios.create({
  baseURL: `http://tluplus.duongphung.com/`,
});

let info: any = {};

const getLogin = async (user: string, pass: string) => {
  await api
    .get(`dang-nhap.php?msv=${user}&pass=${pass}`)
    .then((res) => {
      const data = res.data[0];
      info = {
        ...info,
        name: data['Ho_ten'],
        idCode: data['Msv'],
        pass: data['Pass'],
        class: data['Lop'],
        progress: data['Tien_do'],
      };
    })
    .catch((res) => {
      console.log(res);
    });
  return info;
};

const getSchedule = async () => {
  let schedules: {[x: string]: string}[] = [];
  await api
    .get(`lich-hoc.php?msv=${info.idCode}&pass=${info.pass}`)
    .then((res) => {
      res.data.forEach((element: {[x: string]: string}) => {
        //////////////////////////////////nhớ sửa dấu
        if (
          new Date(element['Ngay_ket_thuc'].split('/').reverse().join('-')) <
          new Date()
        )
          schedules.push(element);
      });
    })
    .catch((res) => {
      console.log(res);
    });
  return schedules;
};

const getInDay = (date: Date, schedules: any) => {
  let scheduleInDay: {[x: string]: string}[] = [];
  schedules?.forEach((element: {[x: string]: string}) => {
    if (new Date(element['Ngay_bat_dau'].split('/').reverse().join('-')) > date)
      return;
    for (
      let i = new Date(date);
      i < new Date(element['Ngay_ket_thuc'].split('/').reverse().join('-'));
      i.setDate(i.getDate() + 1)
    ) {
      if (i.toString() === date.toString())
        if (element['Thu_hoc'] === (i.getDay() + 1).toString()) {
          scheduleInDay.push(element);
          return;
        }
    }
  });
  scheduleInDay.sort((a: {[x: string]: string}, b: {[x: string]: string}) => {
    return a['Tiet_hoc'].split(',')[0] < b['Tiet_hoc'].split(',')[0] ? -1 : 1;
  });
  return scheduleInDay;
};

const getAllSchedule = (temp: any) => {
  let schedules = [];
  let day: any = [];

  if (!temp?.length) return [];
  const max = temp?.reduce(
    (pre: {[x: string]: string}, cur: {[x: string]: string}) => {
      return new Date(cur['Ngay_bat_dau'].split('/').reverse().join('-')) >
        new Date(pre['Ngay_bat_dau'].split('/').reverse().join('-'))
        ? cur
        : pre;
    },
  )['Ngay_ket_thuc'];

  for (
    let i = new Date('2020-06-08');
    i < new Date(max.split('/').reverse().join('-'));
    i.setDate(i.getDate() + 1)
  ) {
    const scheduletemp = getInDay(new Date(i), temp);
    if (scheduletemp.length > 0) {
      const date = `Thứ ${i.getDay() + 1}, Ngày ${i.getDate()}/${
        i.getMonth() + 1
      }/${i.getFullYear()}`;
      day.push(date);
      schedules.push(scheduletemp);
    }
  }

  return [day, schedules];
};

const getUpdate = async () => {
  let update = '';
  await api.get(`update.php?msv=${info.idCode}`).then((res) => {
    update = res.data;
  });
  console.log(update)
  return update;
};

export {getLogin, getSchedule, getInDay, getAllSchedule, getUpdate};

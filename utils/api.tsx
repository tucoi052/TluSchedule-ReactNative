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

const getUpdate = async () => {
  let update = '';
  await api.get(`update.php?msv=${info.idCode}`).then((res) => {
    update = res.data;
  });
  console.log(update);
  return update;
};

export {getLogin, getSchedule, getUpdate};

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

export {getInDay, getAllSchedule};

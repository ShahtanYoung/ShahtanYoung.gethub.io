export default function (dateValue) {
    let date = new Date(dateValue);
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    if (mouth < 10) {
        mouth =`0${mouth}`
    }
    if (day < 10) {
       day = `0${day}`;
    }
    let data = `${date.getFullYear()}-${mouth}-${day} ${date.toTimeString().slice(0, -18)}`;
  return data;
}

import dateMe from "./date";
export default function () {
    let a = JSON.parse(localStorage.getItem("myLessons"));
    let b = a.data.data
    let newdata = b.map((data) => {
      data.update_time = dateMe(`${data.update_time}`);
      data.create_time = dateMe(`${data.create_time}`);
      data.value = []
      return data;
    });
    console.log(newdata)
    return newdata
}
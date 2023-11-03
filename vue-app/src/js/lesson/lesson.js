
import mycard from "../get_my_card.js";

export default function () {
  let axios = require("axios");
  let config = {
    method: "get",
    url: "https://www.chengzier.cn:8000/api/classify",
      headers: {
      Authorization: `Bearer ${mycard()}`,
    },
  };
    axios(config)
        .then(function (response) {
          console.log('xxxxxxxxxx', response)
            let lesson = JSON.stringify(newdata)
            localStorage.setItem("myLessons",lesson)
    })
      .catch(function (error) {
        return error
    });
}

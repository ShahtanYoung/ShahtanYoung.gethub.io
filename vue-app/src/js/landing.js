import imforSet from "./imfor";
export default function () {
  let mycard = localStorage.getItem("ID");
  var axios = require("axios");
  var config = {
    method: "get",
    url: "https://www.chengzier.cn:8000/api/superprofile",
    headers: {
      "Content-Type": "applacation/x-www-form-urlencode",
      Authorization: `Bearer ${mycard}`,
    },
  };
  axios(config)
    .then(function (response) {
        console.log(response.data);
        imforSet(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

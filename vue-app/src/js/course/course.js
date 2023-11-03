import get_my_card from "../get_my_card";

 export default  await function (pk) {
  let axios =require("axios");
  let card = get_my_card();
  let config =  {
    method: "get",
    url: `https://www.chengzier.cn:8000/api/chapter?pk=${pk}`,
    headers: {
      Authorization: `Bearer ${card}`,
    },
  };
 
  axios(config)
      .then(function (response) {
         let a = JSON.stringify(response.data);
         localStorage.setItem("course",a)
    })
    .catch(function (error) {
      alert("获取课程失败，请稍后重试");
      console.log(error);
    });

}

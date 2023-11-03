

export default function (name) {
  this.$router.back();
  let card = get_my_card();
  let formdata = new FormData();
  formdata.append("username", name);
  var requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "applacation/x-www-form-urlencode",
      Authorization: `Bearer ${card}`,
    },
    body: formdata,
    redirect: "follow",
  };
  fetch("https://www.chengzier.cn:8000/api/createsuperuser", requestOptions)
    .then((response) => response.text())
    .then(
      (result) =>
        function () {
            console.log(result);
            localStorage.setItem(result,"result")
        }
    )
    .catch((error) => console.log("error", error));
}

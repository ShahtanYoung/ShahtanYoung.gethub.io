export default function (response) {
    localStorage.setItem("id", `${response.data.id}`);
    localStorage.setItem("id", `${response.data.avator}`);
    localStorage.setItem("email", `${response.data.email}`);
    localStorage.setItem("username", `${response.data.username}`);
    localStorage.setItem("phone", `${response.data.phone}`);

}
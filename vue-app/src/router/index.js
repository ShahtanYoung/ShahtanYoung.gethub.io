import VueRouter from "vue-router";
import LoginPage from "./components/LoginPage.vue";
import MainPage from "./components/MainPage.vue";
import RegisterPage from "./components/RegisterPage.vue";
import HeadPhoto from "./view/HeadPhoto.vue";
import App from "../App.vue"
import Vue from "vue";
import VueX from "vuex"
import HomeIn from "./HomeIn.vue"
Vue.use(VueX);
Vue.use(VueRouter);
export default new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component:HomeIn,
    },
    {
      path: "/LoginPage",
      name: "LoginPage",
      // redirect: "/",
      component: LoginPage,
    },
    {
      path: "/MainPage",
      name: "MainPage",
      component: MainPage,
      children: [
        {
          path: "/HeadPhoto",
          name: "HeadPhoto",
          components: { HeadPhoto },
        },
        {
          path: "/RegisterPage",
          name: "RegisterPage",
          component: RegisterPage,
        },
      ],
    },
  ],
});

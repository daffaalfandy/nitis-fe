import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import axios from "axios";
import VueAxios from "vue-axios";
import { VueCookieNext } from "vue-cookie-next";

// custom variable
import { EXPIRED_COOKIES } from "../env";

// assets
import "@/assets/tailwind.css";
import "@/assets/style/style.css";
import "sweetalert2/dist/sweetalert2.min.css";

VueCookieNext.config({
  expire: EXPIRED_COOKIES,
  domain: ".nitiscreative.com",
  path: "/",
});

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .use(VueAxios, axios)
  .use(VueCookieNext)
  .mount("#app");

// authentication
const TOKEN = VueCookieNext.getCookie("token");
const USER = VueCookieNext.getCookie("user");
if (TOKEN !== null && USER !== null) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  store.commit("setUser", { data: USER, token: TOKEN });
  store.commit("setLoginStatus", { status: true });
} else {
  store.commit("setLoginStatus", { status: false });
  store.commit("setUser", { user: {}, token: {} });
}

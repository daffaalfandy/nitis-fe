import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import { useLoading } from "vue3-loading-overlay";
import axios from "axios";
import VueAxios from "vue-axios";
import { VueCookieNext } from "vue-cookie-next";

// custom variable
import { EXPIRED_COOKIES } from "../env";

// assets
import "@/assets/tailwind.css";
import "@/assets/style/style.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

VueCookieNext.config({ expire: EXPIRED_COOKIES });

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .use(VueAxios, axios)
  .use(VueCookieNext)
  .mixin({
    methods: {
      useLoading,
    },
  })
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

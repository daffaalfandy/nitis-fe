import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import { useLoading } from "vue3-loading-overlay";

// assets
import "@/assets/tailwind.css";
import "@/assets/style/style.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";

createApp(App)
  .use(store)
  .use(router)
  .use(VueSweetalert2)
  .mixin({
    methods: {
      useLoading,
    },
  })
  .mount("#app");

/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from "vue-router";
import { APP_NAME } from "../../env";
import Home from "../views/Home.vue";

// home section
import HomeSinopsis from "../components/HomeSinopsis";
import HomeMerchandise from "../components/HomeMerchandise";
import HomePolicy from "../components/HomePolicy";
import HomePricing from "../components/HomePricing";
import HomeAbout from "../components/HomeAbout";

const DEFAULT_TITLE = APP_NAME;

const routes = [
  // Home
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: `${DEFAULT_TITLE} | Home` },
    children: [
      {
        path: "sinopsis",
        name: "Sinopsis",
        component: HomeSinopsis,
        meta: { title: `${DEFAULT_TITLE} | Sinopsis` },
      },
      {
        path: "pricing",
        name: "Pricing",
        component: HomePricing,
        meta: { title: `${DEFAULT_TITLE} | Harga Tiket` },
      },
      {
        path: "merchandise",
        name: "Merchandise",
        component: HomeMerchandise,
        meta: { title: `${DEFAULT_TITLE} | Merchandise` },
      },
      {
        path: "policy",
        name: "Policy",
        component: HomePolicy,
        meta: { title: `${DEFAULT_TITLE} | Aturan & Regulasi` },
      },
      {
        path: "about",
        name: "About",
        component: HomeAbout,
        meta: { title: `${DEFAULT_TITLE} | Tentang Kami` },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// set page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;

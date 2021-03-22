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

// auth section
import Login from "../views/Login";
import Register from "../views/Register";

// ticket section
import Ticket from "../views/Ticket";
import TicketConfirmation from "../views/TicketConfirmation";

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
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: `${DEFAULT_TITLE} | Masuk` },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title: `${DEFAULT_TITLE} | Daftar` },
  },
  {
    path: "/ticket",
    name: "Ticket",
    component: Ticket,
    meta: { title: `${DEFAULT_TITLE} | Beli Tiket` },
  },
  {
    path: "/ticket-confirmation",
    name: "Ticket Confirmation",
    component: TicketConfirmation,
    meta: { title: `${DEFAULT_TITLE} | Konfirmasi Tiket` },
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

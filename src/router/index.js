import { createRouter, createWebHistory } from "vue-router";
import { APP_NAME } from "../../env";
import Home from "../views/Home.vue";

const DEFAULT_TITLE = APP_NAME;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: `${DEFAULT_TITLE} | Home` },
  },
];

// set page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

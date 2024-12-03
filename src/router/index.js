import { createRouter, createWebHistory } from "vue-router";

const scrollBehavior = () => {
  return {
    top: 0,
    behavior: "smooth",
  };
};  

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/not-found.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;

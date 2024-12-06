import { createRouter, createWebHistory } from "vue-router";

// Sahifa yuqoriga o'zgarish animatsiyasi uchun scrollBehavior
const scrollBehavior = () => {
  return {
    top: 0,
    behavior: "smooth",
  };
};

const routes = [
  // Home sahifasi uchun ikkita yo'l: '/' va '/home'
  {
    path: "/",
    name: "home",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/home",
    redirect: "/", // "/home" bo'lsa "/" ga yo'naltirish
  },
  // How Works sahifasi
  {
    path: "/howworks",
    name: "how_works",
    component: () => import("../pages/HowWorks.vue"),
  },
  {
    path: "/instruction",
    name: "instruction",
    component: () => import("../pages/Instruction.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../pages/Products.vue"),
  },
  {
    path: "/base",
    name: "base",
    component: () => import("../pages/base.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../pages/about.vue"),
  },
  // Not Found sahifasi
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;

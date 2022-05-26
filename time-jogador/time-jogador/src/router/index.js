import { createRouter, createWebHistory } from "vue-router";
import HomeJogo from "@/router/HomeJogo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeJogo,
    },
    {
      path: "/jogadores",
      name: "about",
      component: () => import("@/router/JogadoresJogo.vue"),
    },
    {
      path: "/times",
      name: "about",
      component: () => import("@/router/TimesJogo.vue"),
    },
  ],
});

export default router;

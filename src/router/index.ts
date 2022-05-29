import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "channel",
      component: () => import("../views/ChannelView.vue"),
    },
  ],
});

export default router;

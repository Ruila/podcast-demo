import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "channel",
      component: () => import("../views/ChannelView.vue"),
    },
    {
      path: "/podcast/:id",
      name: "podcast",
      component: () => import("../views/PodcastView.vue"),
    },
  ],
});

export default router;

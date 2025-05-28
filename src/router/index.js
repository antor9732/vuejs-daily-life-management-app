import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import weight_tracking from "@/views/weight-tracking.vue";
import contact from "@/views/contact.vue";
import team  from "@/views/team.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
   {
      path: "/weight-tracking",
      name: "weight-tracking",
      component: weight_tracking,
   },
   {
    path: "/contact",
    name: "contact",
    component: contact,
   },
   {
    path: "/team",
    name: "team",
    component: team,
   }
  ],
});

export default router
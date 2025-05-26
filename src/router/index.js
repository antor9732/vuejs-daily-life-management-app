import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue";
import about from "@/views/about.vue";
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
      path: "/about",
      name: "about",
      component: about,
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
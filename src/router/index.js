import { createRouter, createWebHistory } from "vue-router";
import todo_list_app from "@/views/Todo-List-App.vue";
import weight_tracking from "@/views/weight-tracking.vue";
import contact from "@/views/contact.vue";
import team  from "@/views/team.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/vuejs-daily-life-management-app",
      name: "todo_list_app",
      component: todo_list_app,
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
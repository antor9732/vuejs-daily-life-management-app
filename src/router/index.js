import { createRouter, createWebHashHistory } from "vue-router";
import todo_list_app from "@/views/Todo-List-App.vue";
import weight_tracking from "@/views/weight-tracking.vue";
import weatherCheck from "@/views/WeatherCheck-app.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "todo_list_app",
      component: todo_list_app,
    },
   {
      path: "/weight-tracking",
      name: "weight-tracking",
      component: weight_tracking,
   },
   {
    path: "/weather-check-app",
    name: "weather-check-app",
    component: weatherCheck,
   },

  ],
});

export default router
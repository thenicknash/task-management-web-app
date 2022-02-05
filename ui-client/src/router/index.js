import { createWebHistory, createRouter } from "vue-router";
import AllTasksComponent from "../views/AllTasks";
import IndividualTaskComponent from "../views/IndividualTask";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AllTasksComponent,
  },
  {
    path: "/task/:id",
    name: "Task",
    component: IndividualTaskComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

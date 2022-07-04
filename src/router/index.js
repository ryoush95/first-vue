import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../components/firstPage.vue";
import nextPage from "../components/nextPage.vue";
import hello from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "first page",
    component: MainPage,
  },
  {
    path: "/next",
    name: "second page",
    component: nextPage,
  },
  {
    path: "/hello",
    name: "hello page",
    component: hello,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

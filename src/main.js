import { createApp } from "vue";
import App from "./App.vue";
import "./global.css";
import { createRouter, createWebHistory } from "vue-router";
import FutureSlider from "vue-future-slider";
import "vue-future-slider/dist/vue-future-slider.css";
// import Start from "./pages/Start.vue";
// import About from "./pages/About.vue";
// import Numbers from "./pages/Numbers.vue";
// import HotelTerritory from "./pages/HotelTerritory.vue";
// import HotelTerritoryBeach from "./pages/HotelTerritoryBeach.vue";
// import HotelTerritorySPA from "./pages/HotelTerritorySPA.vue";
// import HotelTerritorySport from "./pages/HotelTerritorySport.vue";
// import Contacts from "./pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),
  //   linkActiveClass: "active",
  //   linkExactActiveClass: "div",
  routes: [
    {
      name: "Start",
      path: "/",
      //   component: Start,
      component: () => import("./pages/Start.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "About",
      path: "/about",
      //   component: About,
      component: () => import("./pages/About.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "Numbers",
      path: "/numbers",
      //   component: Numbers,
      component: () => import("./pages/Numbers.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "HotelTerritory",
      path: "/hotel territory",
      //   component: HotelTerritory,
      component: () => import("./pages/HotelTerritory.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "HotelTerritoryBeach",
      path: "/hotel territory beach",
      //   component: HotelTerritoryBeach,
      component: () => import("./pages/HotelTerritoryBeach.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "HotelTerritorySPA",
      path: "/hotel territory SPA",
      //   component: HotelTerritorySPA,
      component: () => import("./pages/HotelTerritorySPA.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "HotelTerritorySport",
      path: "/hotel territory sport",
      //   component: HotelTerritorySport,
      component: () => import("./pages/HotelTerritorySport.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      name: "Contacts",
      path: "/contacts",
      //   component: Contacts,
      component: () => import("./pages/Contacts.vue"),
      //   meta: { requiresAuth: true },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
      //   meta: { requiresAuth: true },
    },
  ],
});

createApp(App).use(router).use(FutureSlider).mount("#app");

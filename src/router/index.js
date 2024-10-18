import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";


const routes = [
  { path: "/", name: "Login", component: LoginPage },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("../views/ProfilePage.vue"),
      },
      {
        path: "showcase",
        name: "Showcase",
        component: () => import("../views/ShowcasePage.vue"),
      },
      {
        path: "contact",
        name: "Contact",
        component: () => import("../views/ContactPage.vue"),
      },
      {
        path: "creative",
        name: "Creative",
        component: () => import("../views/CreativePage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

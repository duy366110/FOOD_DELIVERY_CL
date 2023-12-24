import { createRouter, createWebHistory } from 'vue-router'

// DASHBOARD
const DashboardComponent = () => import("../components/dashboard-component/DashboardComponent.vue");
const DashboardMainComponent = () => import("../components/dashboard-component/DashboardMainComponent.vue");
const DashboardMenuComponent = () => import("../components/dashboard-component/DashboardMenuComponent.vue");
const DashboardAboutComponent = () => import("../components/dashboard-component/DashboardAboutComponent.vue");
const DashboardDishDetailComponent = () => import("../components/dashboard-component/DashboardDishDetailComponent.vue");
const DashboardOrderComponent = () => import("../components/dashboard-component/DashboardOrderComponent.vue");

// AUTH
const AuthComponent = () => import("../components/auth-component/AuthComponent.vue");
const AuthSignInComponent = () => import("../components/auth-component/AuthSignInComponent.vue");
const AuthSignUpComponent = () => import("../components/auth-component/AuthSignUpComponent.vue");

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/DashboardMain.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: DashboardComponent,
        children: [
          {
            path: "",
            name: "dashboard-main",
            component: DashboardMainComponent
          },
          {
            path: "about",
            name: "about",
            component: DashboardAboutComponent
          },
          {
            path: "menu",
            name: "menu",
            component: DashboardMenuComponent
          },
          {
            path: "dish/:id",
            name: "dish-detail",
            component: DashboardDishDetailComponent
          },
          {
            path: "order",
            name: "order",
            component: DashboardOrderComponent
          }
        ]
      }
    ]
  },
  {
    path: '/auth',
    name: "auth",
    component: () => import("../views/AuthView.vue"),
    children: [
      {
        path: "",
        name: "auth",
        component: AuthComponent,
        children: [
          {
            path: "",
            name: "auth-signin",
            component: AuthSignInComponent,
          },
          {
            path: "signup",
            name: "auth-signup",
            component: AuthSignUpComponent
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

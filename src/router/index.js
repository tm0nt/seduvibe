import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../components/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PerfilView from "../views/PerfilView.vue";
import PagamentosView from "../views/PagamentosView.vue";
import AcessosView from "../views/AcessosView.vue";
import RankingView from "../views/RankingView.vue";
import PerfilCreator from "../components/PerfilCreator.vue";
import MyDashCreator from "../components/MyDashCreator.vue";
import Analytics from "../views/AnalyticsView.vue";
import ConfigCreatorView from "../components/ConfigCreatorView.vue";






Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    meta: { title: "Seduvibe - Exclusividade e liberdade" },
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { title: "Feed" },
  },
    {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
    meta: { title: "Analytics" },
  },
      {
    path: "/config",
    name: "Configurações",
    component: ConfigCreatorView,
    meta: { title: "Configurações" },
  },
  
  {
    path: "/perfil",
    name: "perfil",
    component: PerfilView,
    meta: { title: "Meu perfil" },
  },
  {
    path: "/acessos",
    name: "acessos",
    component: AcessosView,
    meta: { title: "Minhas assinaturas" },
  },
  {
    path: "/pagamentos",
    name: "pagamentos",
    component: PagamentosView,
    meta: { title: "Pagamentos" },
  },
  {
    path: "/ranking",
    name: "ranking",
    component: RankingView,
    meta: { title: "Ranking" },
  },
  {
    path: "/creator",
    name: "creator",
    component: PerfilCreator,
    meta: { title: "Nome modelo" },
  },
  {
    path: "/dashboard",
    name: "dashboardCreator",
    component: MyDashCreator,
    meta: { title: "Meu perfil" },
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;

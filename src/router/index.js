import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../components/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PerfilView from "../views/PerfilView.vue";
import PagamentosView from "../views/PagamentosView.vue";
import AcessosView from "../views/AcessosView.vue";
import RankingView from "../views/RankingView.vue";
import PerfilCreator from "../components/PerfilCreator.vue";

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
    path: "/perfil",
    name: "perfil",
    component: PerfilView,
    meta: { title: "Perfil" },
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

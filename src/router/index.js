import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../components/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PerfilView from "../views/PerfilView.vue";
import PagamentosView from "../views/PagamentosView.vue";
import AcessosView from "../views/AcessosView.vue";
import NovaSenha from "../components/nova_senha/NovaSenhaView.vue";
import RankingView from "../views/RankingView.vue";
import VibePlusAssinatura from "../views/AssineVibePlusView.vue";
import RankingViewUser from "../components/RankingUser.vue";
import PerfilCreator from "../components/PerfilCreator.vue";
import MyDashCreator from "../components/MyDashCreator.vue";
import Analytics from "../views/AnalyticsView.vue";
import ConfigCreatorView from "../components/ConfigCreatorView.vue";
import AllAccount from "../components/analytics/menu/EverythingAccountView.vue";
import Chat from "../components/analytics/menu/ChatView.vue";
import Recorrente from "../components//analytics/menu/RecorrentesView.vue";
import Wallet from "../components/analytics/menu/WalletView.vue";
import Views from "../components/analytics/menu/ViewsView.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { title: "Seduvibe - Exclusividade e liberdade" },
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: "Feed" },
  },
  {
    path: "/assine",
    name: "VibePlus",
    component: VibePlusAssinatura,
    meta: { title: "Assine agora" },
  },
    {
    path: "/reset",
    name: "Resetar senha",
    component: NovaSenha,
    meta: { title: "Redefinição de senha" },
  },
  {
    path: "/rankingUser",
    name: "RankingUser",
    component: RankingViewUser,
    meta: { title: "Ranking" },
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
    {
    path: "/wallet",
    name: "wallet",
    component: Wallet,
    meta: { title: "Carteira" },
  },
      {
    path: "/views",
    name: "views",
    component: Views,
    meta: { title: "Dados de visualização" },
  },
        {
    path: "/chat",
    name: "chat",
    component: Chat,
    meta: { title: "Chat" },
    
  },
          {
    path: "/all",
    name: "all",
    component: AllAccount,
            meta: { title: "Dados" },
  },
    {
    path: "/recorrent",
    name: "recorrent",
    component: Recorrente,
    meta: { title: "Próximos pagamentos" },
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

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginView.vue"),
    meta: { title: "Seduvibe - Exclusividade e liberdade" },
  },
  {
    path: "/vibecreator",
    name: "Vibe Creator",
    component: () => import("../components/vibeplus/VibePlusCreator.vue"),
    meta: { title: "Vibe - Painel de controle" },
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
    meta: { title: "Feed" },
  },
  {
    path: "/termos-de-servico",
    name: "Termos de Servico",
    component: () => import("../components/info/TermosDeServico.vue"),
    meta: { title: "Termos de serviço" },
  },
  {
    path: "/o-que-e-vibe",
    name: "O que é Vibe+",
    component: () => import("../components/info/VibeMaisInfo.vue"),
    meta: { title: "O que é Vibe+?" },
  },
  {
    path: "/vibe",
    name: "Assine Vibe+",
    component: () => import("../components/vibeplus/VibePlus.vue"),
    meta: { title: "Vibe+" },
  },
  {
    path: "/noaccount",
    name: "Sem Conta",
    component: () => import("../views/SemConta.vue"),
    meta: { title: "Está sem conta?" },
  },
  {
    path: "/signature",
    name: "VibePlus",
    component: () => import("../views/AssineVibePlusView.vue"),
    meta: { title: "Assine agora" },
  },
  {
    path: "/reset",
    name: "Resetar senha",
    component: () => import("../components/nova_senha/NovaSenhaView.vue"),
    meta: { title: "Redefinição de senha" },
  },
  {
    path: "/rankingUser",
    name: "RankingUser",
    component: () => import("../components/RankingUser.vue"),
    meta: { title: "Ranking" },
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: () => import("../views/AnalyticsView.vue"),
    meta: { title: "Analytics" },
  },
  {
    path: "/config",
    name: "Configurações",
    component: () => import("../components/ConfigCreatorView.vue"),
    meta: { title: "Configurações" },
  },
  {
    path: "/profile",
    name: "perfil",
    component: () => import("../views/PerfilView.vue"),
    meta: { title: "Meu perfil" },
  },
  {
    path: "/ranking",
    name: "ranking",
    component: () => import("../views/RankingView.vue"),
    meta: { title: "Ranking" },
  },
  {
    path: "/creator",
    name: "creator",
    component: () => import("../components/PerfilCreator.vue"),
    meta: { title: "Laís Alves" },
  },
  {
    path: "/dashboard",
    name: "dashboardCreator",
    component: () => import("../components/MyDashCreator.vue"),
    meta: { title: "Meu perfil" },
  },
  {
    path: "/wallet",
    name: "wallet",
    component: () => import("../components/analytics/menu/WalletView.vue"),
    meta: { title: "Carteira" },
  },
  {
    path: "/vibeplus",
    name: "Vibe+",
    component: () => import("../components/vibeplus/VibePlus.vue"),
    meta: { title: "Vibe+" },
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../components/analytics/menu/ChatView.vue"),
    meta: { title: "Chat" },
  },
  {
    path: "/all",
    name: "all",
    component: () => import("../components/analytics/menu/EverythingAccountView.vue"),
    meta: { title: "Dados" },
  },
  {
    path: "/recorrent",
    name: "recorrent",
    component: () => import("../components/analytics/menu/RecorrentesView.vue"),
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

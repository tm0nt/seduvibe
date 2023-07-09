import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../components/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import PerfilView from "../views/PerfilView.vue";
import NovaSenha from "../components/nova_senha/NovaSenhaView.vue";
import RankingView from "../views/RankingView.vue";
import VibePlusAssinatura from "../views/AssineVibePlusView.vue";
import RankingViewUser from "../components/RankingUser.vue";
import WebCam from "../views/videochamadas/WebCam.vue";
import PerfilCreator from "../components/PerfilCreator.vue";
import MyDashCreator from "../components/MyDashCreator.vue";
import Analytics from "../views/AnalyticsView.vue";
import ConfigCreatorView from "../components/ConfigCreatorView.vue";
import AllAccount from "../components/analytics/menu/EverythingAccountView.vue";
import Chat from "../components/analytics/menu/ChatView.vue";
import Recorrente from "../components//analytics/menu/RecorrentesView.vue";
import Wallet from "../components/analytics/menu/WalletView.vue";
import SemConta from "../views/SemConta.vue";
import VibePlus from "../components/vibeplus/VibePlus.vue";
import EmailConfirm from "../views/EmailConfirm.vue";
import TermosServico from "../components/info/TermosDeServico.vue";
import VibePlusInfo from "../components/info/VibeMaisInfo.vue";
import VibePlusCreator from "../components/vibeplus/VibePlusCreator.vue";
import Publicar from "../components/post/PublicacaoView.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { title: "Seduvibe - Exclusividade e liberdade" },
  },
    {
    path: "/post",
    name: "publicar",
    component: Publicar,
    meta: { title: "Nova publicação" },
  },
    {
    path: "/confirm",
    name: "COnfirma Email",
    component: EmailConfirm,
    meta: { title: "Estamos confirmando seu email..." },
  },
    {
    path: "/vibecreator",
    name: "Vibe Creator",
    component: VibePlusCreator,
    meta: { title: "Vibe - Painel de controle" },
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: { title: "Feed" },
  },
  {
    path: "/termos-de-servico",
    name: "Termos de Servico",
    component: TermosServico,
    meta: { title: "Termos de serviço" },
  },
  {
    path: "/o-que-e-vibe",
    name: "O que é Vibe+",
    component: VibePlusInfo,
    meta: { title: "O que é Vibe+?" },
  },
  {
    path: "/vibe",
    name: "Assine Vibe+",
    component: VibePlus,
    meta: { title: "Vibe+" },
  },
   {
    path: "/cam",
    name: "Webcam",
    component: WebCam,
    meta: { title: "Assistindo..." },
  },
  {
    path: "/noaccount",
    name: "Sem Conta",
    component: SemConta,
    meta: { title: "Está sem conta?" },
  },
  {
    path: "/signature",
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
    path: "/profile",
    props: true,
    name: "perfil",
    component: PerfilView,
    meta: { title: "Meu perfil" },
  },
  
  {
    path: "/ranking",
    name: "ranking",
    component: RankingView,
    meta: { title: "Ranking" },
  },
{
  path: '/@:username',
  name: 'creator',
  component: PerfilCreator,
  meta: { title: "Perfil do Criador" }
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
    path: "/vibeplus",
    name: "Vibe+",
    component: VibePlus,
    meta: { title: "Vibe+" },
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

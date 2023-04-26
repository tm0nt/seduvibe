<template>
    <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
            <SideBar :drawer.sync="drawer" />

        <v-container>
            <v-toolbar flat color="rgba(0,0,0,0)">
                <v-btn icon dark class="d-lg-none d-xl-flex" @click.stop="drawer = !drawer">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-text-field label="Pesquise por usuários..." class="white--text pt-5 d-none d-sm-flex" dark filled
                    prepend-inner-icon="mdi-magnify" color="white" solo flat background-color="purple" rounded
                    outlined></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="purple" class="mr-2 white--text">
                    <v-icon left>fas fa-filter</v-icon>
                    Filtros
                </v-btn>
            </v-toolbar>
            <v-app-bar dark color="rgba(0,0,0,0)" flat class="">
                <v-tabs color="purple">
                    <v-tabs-slider color="purple"></v-tabs-slider>

                    <v-tab class="withoutupercase">Perfis verificados</v-tab>
                    <v-tab class="withoutupercase">Mais visitados</v-tab>
                    <v-tab class="withoutupercase">Novos perfis</v-tab>
                    <v-tab class="withoutupercase">Ranking</v-tab>
                </v-tabs>
                <v-spacer></v-spacer>
                <v-btn rounded color="purple" class="white--text">
                    Grade
                    <v-icon right>mdi-format-list-bulleted</v-icon>
                </v-btn>
                <v-btn color="purple" icon>
                    <v-icon>mdi-apps</v-icon>
                </v-btn>
            </v-app-bar>
            <v-divider color="grey"></v-divider>
            <v-toolbar flat color="rgba(0,0,0,0)">
                <v-divider vertical color="grey" inset></v-divider>
                <v-toolbar-title class="grey--text ml-4">Tags</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-chip class="ma-1 d-none d-sm-flex" color="purple" label text-color="white" dark>
                    <v-avatar color="white" rounded class="mr-2">
                        <v-img src="" contain></v-img>
                    </v-avatar>
                    Novinhas
                </v-chip>
                <v-chip class="ma-1 d-none d-sm-flex" color="purple" label text-color="white" dark>
                    <v-avatar color="white" rounded class="mr-2">
                        <v-img src="2.png" contain></v-img>
                    </v-avatar>

                    Gamer
                </v-chip>
                <v-spacer></v-spacer>
                <v-btn color="purple" class="mr-2" outlined>
                    <v-icon left>mdi-chevron-left</v-icon>
                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
            </v-toolbar>
            <v-row class="mt-n14">
                <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(vibe, i) in seduvibe" :key="i">
                    <v-card class="mx-auto my-12 rounded-xl" max-width="374" color="#151515">
                        <v-img  width="100%" :src="vibe.image"></v-img>
                        <v-toolbar color="transparent" class="mt-n7" flat>
                            <v-avatar color="white" rounded class="mr-2">
                                <v-img :src="vibe.pic" contain></v-img>
                            </v-avatar>
                            <v-spacer></v-spacer>
                            <v-avatar color="black" rounded class="mr-2" purple>
                                <div class="three">
                                    <div class="four">
                                        <span class="white--text caption">{{ vibe.price }}</span>
                                    </div>
                                    <div class="five">
                                        <span class="black--text caption mdi mdi-lock"></span>
                                    </div>
                                </div>
                            </v-avatar>
                        </v-toolbar>
                        <v-card-title class="grey--text caption">{{
                            vibe.id
                        }}</v-card-title>
                        <v-card-title class="grey--text text-grey-purple-1 caption mt-n6">{{
                            vibe.date
                        }}</v-card-title>
                        <v-card-text class="white--text text-grey-purple-1 mt-n2">{{
                            vibe.marque
                        }}</v-card-text>

                        <v-card-text class="mt-n4">
                            <v-chip-group active-class="deep-purple accent-4 white--text" column>
                                <v-chip label purple>{{ vibe.pay1 }}</v-chip>
                                <v-spacer></v-spacer>
                                <v-avatar size="40">
                                    <v-img :src="vibe.avatar"></v-img>
                                </v-avatar>
                            </v-chip-group>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        
        </v-container>
    </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
    name: "HomeView",
    data: () => ({
        selection: 1,
        drawer: true,
        seduvibe: [
            {
                image: "https://conteudo.imguol.com.br/c/entretenimento/bb/2020/03/17/jade-picon-e-uma-das-maiores-influenciadoras-teens-do-brasil-1584491745731_v2_3x4.jpg",
                pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
                price: "$465",
                id: "Última postagem: 02.12.2021",
                date: "153 Imagens | 200 Vídeos",
                marque: "Taiane Martins",
                pay1: "BRASIL",
                avatar: "",
            },
            {
                image: "https://conteudo.imguol.com.br/c/entretenimento/bb/2020/03/17/jade-picon-e-uma-das-maiores-influenciadoras-teens-do-brasil-1584491745731_v2_3x4.jpg",
                pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
                price: "$465",
                id: "Última postagem: 02.12.2021",
                date: "153 Imagens | 200 Vídeos",
                marque: "Taiane Martins",
                pay1: "BRASIL",
                avatar: "",
            },
            {
                image: "https://conteudo.imguol.com.br/c/entretenimento/bb/2020/03/17/jade-picon-e-uma-das-maiores-influenciadoras-teens-do-brasil-1584491745731_v2_3x4.jpg",
                pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
                price: "$465",
                id: "Última postagem: 02.12.2021",
                date: "153 Imagens | 200 Vídeos",
                marque: "Taiane Martins",
                pay1: "BRASIL",
                avatar: "",
            },
                {
                image: "https://conteudo.imguol.com.br/c/entretenimento/bb/2020/03/17/jade-picon-e-uma-das-maiores-influenciadoras-teens-do-brasil-1584491745731_v2_3x4.jpg",
                pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
                price: "$465",
                id: "Última postagem: 02.12.2021",
                date: "153 Imagens | 200 Vídeos",
                marque: "Taiane Martins",
                pay1: "BRASIL",
                avatar: "",
            },
        ],

    }),
    components: {
        SideBar
    },
    methods: {},
    mounted() {
        // Verifica se o usuário está acessando a página de um celular
        const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
        if (isMobile) {
            this.drawer = false;
        }
    }
};
</script>
<style scoped>
.v-tab.withoutupercase {
    text-transform: none !important;
}

.v-tabs {
    width: 50% !important;
}

.v-btn.withoutupercase {
    text-transform: none !important;
}

/*div{
  display:inline-block;
  float:left;
  color:#fff;
  font-size:10px;
}*/

.three {
    width: 50px;
    height: 50px;
}

.four {
    width: 50px;
    height: 25px;
    background: black;
}

.five {
    width: 50px;
    height: 25px;
    background: grey;
}

.six {
    width: 50px;
    height: 25px;
    background: #2c2107;
}

</style>
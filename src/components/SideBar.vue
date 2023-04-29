<template>
    <v-navigation-drawer v-model="localDrawer" app color="#212121" mini-variant mini-variant-width="110">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="85">
            <v-img class="mt-5" src="../assets/logo2.png" height="auto" max-width="50px"></v-img>
        </v-avatar>

        <v-card flat color="#151515" class="rounded-xl mx-4 py-10">
            <v-list flat class="" dark>
                <v-list-item-group v-model="selectedItem">
                    <v-list-item v-for="(item, i) in items" :key="i" active-class="border" exact :to="item.url"
                        :class="{ active: item.active }">
                        <v-list-item-content>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon v-text="item.icon" :color="item.active ? 'white' : 'grey lighten-1'"
                                        v-on="on"></v-icon>
                                </template>
                                <span>{{ item.title }}</span>
                            </v-tooltip>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-card>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawer: Boolean
    },
    data() {
        return {
            localDrawer: this.drawer,
            selectedItem: 0,
            items: [
                { icon: 'mdi-home-outline', url: '/home', title: 'Home', active: false },
                { icon: 'mdi-lock-open-outline', url: '/acessos', title: 'Acessos', active: false },
                { icon: 'mdi-account-circle-outline', url: '/perfil', title: 'Perfil', active: false },
                { icon: 'mdi-credit-card-chip-outline', url: '/pagamentos', title: 'Pagamentos', active: false },
                { icon: 'mdi-chevron-triple-up', url: '/ranking', title: 'Ranking', active: false }
            ]
        };
    },
    watch: {
        drawer(newValue) {
            this.localDrawer = newValue;
        },
        $route(newRoute) {
            // define a propriedade "active" o menu com base na rota atual
            this.items.forEach(item => {
                item.active = newRoute.path === item.url;
            });
        }
    },
    methods: {
        selectItem() {
            this.$emit('update:drawer', false);
        }
    }
};
</script>

<style>
.border {
    margin: 0px 8px;
    background: purple;
    border-radius: 15px;
    text-decoration: none;
}
</style>

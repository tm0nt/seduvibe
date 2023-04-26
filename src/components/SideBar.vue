<template>
    <v-navigation-drawer v-model="localDrawer" app color="#212121" mini-variant mini-variant-width="110">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="85">
                <v-img class="mt-5" src="../assets/logo2.png" height="auto" max-width="50px"></v-img>
        </v-avatar>

        <v-card flat color="#151515" class="rounded-xl mx-4 py-10">
            <v-list flat class="" dark>
                <v-list-item-group v-model="selectedItem">
                    <v-list-item v-for="(item, i) in items" :key="i" active-class="border" v-slot="{ active }" @click="redirectToItem(item.url)" 
                        :ripple="false">
                        <v-list-item-content>
                            <v-icon v-text="item.icon" :color="active ? 'white' : 'grey lighten-1'"></v-icon>
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
                { icon: "mdi-home-outline", url: '/' },
                { icon: "mdi-lock-open-outline",  url: '/acessos' },
                { icon: "mdi-account-circle-outline", url: '/perfil' },
                { icon: "mdi-credit-card-chip-outline", url: '/pagamentos' },
                { icon: "mdi-chevron-triple-up", url: '/ranking' }
            ],
        };
    },
    watch: {
        drawer(newValue) {
            this.localDrawer = newValue;
        },
    },
    methods: {
        selectItem() {
            this.$emit("update:drawer", false);
        },
         redirectToItem(url) {
            // navegar pelo router
            this.$router.push(url);
        },
    },
};
</script>

<style>
.border {
    margin: 0px 8px;
    background: purple;
    border-radius: 15px;
    text-decoration: none;}
</style>
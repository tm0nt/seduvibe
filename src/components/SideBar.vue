<template>
    <v-navigation-drawer v-model="localDrawer" app color="#212121" mini-variant mini-variant-width="110">
        <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="85">
                <v-img class="mt-5" src="../assets/logo2.png" height="auto" max-width="50px"></v-img>
        </v-avatar>

        <v-card flat color="#151515" class="rounded-xl mx-4 py-10">
            <v-list flat class="" dark>
                <v-list-item-group v-model="selectedItem">
                    <v-list-item v-for="(item, i) in items" :key="i" active-class="border" v-slot="{ active }"
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
                { icon: "mdi-home-outline" },
                { icon: "mdi-lock-open-outline" },
                { icon: "mdi-account-circle-outline" },
                { icon: "mdi-credit-card-chip-outline" },
                { icon: "mdi-chevron-triple-up" },
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
            // adiciona qualquer outra lógica que desejar
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
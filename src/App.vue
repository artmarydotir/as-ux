<template>
  <v-app>
  <v-navigation-drawer
      v-model="drawer"
      app
      right
      temporary
    >
    <aasaaMmenu />
    </v-navigation-drawer>

    <v-app-bar
      app
      color="teal"
      dark
    >
      <v-toolbar-title>آسام Ux</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />

    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import aasaaMmenu from './components/aasaaMmenu.vue';

export default {
  name: 'App',

  components: {
    aasaaMmenu,
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style>
/* @import '../node_modules/@aasaam/noto-font/dist/font-face.css';
.v-btn {
  font-family: 'aasaam-Noto' !important;
} */
</style>

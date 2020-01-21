<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right temporary>
      <aasaaMmenu />
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-toolbar-title>آسام Ux</v-toolbar-title>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-btn
        icon
        large
        v-model="profile"
      >
        <v-avatar size="32px">
          <img
            src="../assets/index.svg.png"
            alt="aasaam"
          >
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <slot />
      <!-- <transition name="moveInUp">
        <router-view />
      </transition> -->
    </v-content>
    <v-footer padless absolute color="teal lighten-4">
      <v-col
        class="text-center"
        cols="12"
      >
        <strong>
          گروه نرم افزاری آسام
        </strong>  —
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import aasaaMmenu from '../components/aasaaMmenu.vue';

export default {
  name: 'App',

  components: {
    aasaaMmenu,
  },
  data() {
    return {
      drawer: false,
      profile: false,
    };
  },
};
</script>
<style>
</style>

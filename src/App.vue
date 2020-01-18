<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right temporary>
      <aasaaMmenu />
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-toolbar-title>آسام Ux</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <transition name="moveInUp">
        <router-view />
      </transition>
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
.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>

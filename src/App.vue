<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import customLogin from './layouts/customLogin.vue';
import defaultLayout from './layouts/defaultLayout.vue';

export default {
  computed: {
    layout() {
      return this.$store.getters.layout;
    },
  },
  components: {
    'custom-layout': customLogin,
    'default-layout': defaultLayout,
    // define as many layouts you want for the application
  },
};
</script>

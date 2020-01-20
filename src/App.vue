<template>
  <v-app>
    <component v-bind:is="layout">
      <transition name="moveInUp">
        <router-view />
      </transition>
    </component>
  </v-app>
</template>

<script>
// eslint-disable-next-line camelcase
const default_layout = 'default';

export default {
  computed: {
    layout() {
      // eslint-disable-next-line camelcase
      return `${this.$route.meta.layout || default_layout}-layout`;
    },
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

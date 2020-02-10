<template>
  <!-- <a href="#" class="text-copy-primary hover:text-gray-600" @click.prevent="toggleTheme">
    <v-icon v-if="theme === 'theme-light'">mdi-home</v-icon>
    <v-icon v-else>mdi-delete</v-icon>
  </a> -->

  <v-switch @change="switchTheme"
    hint="switch theme"
    append-icon="mdi-palette"
  ></v-switch>
</template>

<script>
export default {
  // props: {
  //   theme: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // methods: {
  //   toggleTheme() {
  //     const newTheme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light';
  //     localStorage.setItem('theme', newTheme);
  //     this.$emit('themeChanged', newTheme);
  //   },
  // },
  inject: ['theme'],
  methods: {
    switchTheme() {
      const switchOff = this.$vuetify.dark ? 'theme--dark' : 'theme--light';
      const switchOn = this.$vuetify.dark ? 'theme--light' : 'theme--dark';
      const themed = document.getElementsByClassName(switchOff);

      Array.from(themed).forEach((el) => {
        el.classList.remove(switchOff);
        el.classList.add(switchOn);
      });

      this.$vuetify.dark = !this.$vuetify.dark;
      this.theme.isDark = !this.theme.isDark;
    },
  },
};
</script>

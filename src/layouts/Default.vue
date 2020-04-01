<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app right temporary width="340">
      <aasaaMmenu />
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-toolbar-title>آسام Ux</v-toolbar-title>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <v-menu
        transition="slide-x-transition"
        right
        bottom
        offset-y
      >
      <template v-slot:activator="{ on }">
      <v-btn
        icon
        large
        v-on="on"
        v-model="profile"
      >
        <v-avatar size="32px">
          <img
            src="../assets/index.svg.png"
            alt="aasaam"
          >
        </v-avatar>
      </v-btn>
      </template>
      <v-list>
        <v-list-item to="/user/profile" color="blue">
          <v-list-item-title>
            نمایش پروفایل
          </v-list-item-title>
        </v-list-item>
        <v-list-item color="blue" to="/user/editprofile">
          <v-list-item-title>
            ویرایش پروفایل
          </v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item @click="logOut">
          <v-list-item-title>
            خروج
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
// import theme from '@/components/globalCmp/themeSwitcher.vue';

export default {
  name: 'App',
  components: {
    aasaaMmenu,
    // theme,
  },
  data() {
    return {
      drawer: false,
      profile: false,
    };
  },
  methods: {
    logOut() {
      this.$router.push('/');
    },
  },
};
</script>
<style>
</style>

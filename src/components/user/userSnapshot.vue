<template>
  <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="7"
          offset-md="1"
        >
          <v-card>
            <v-card-title class="text-center justify-center py-6">
              <v-img width="80" contain height="80" src="../../assets/logo.png"></v-img>
            </v-card-title>
            <v-tabs
              active-class="dd"
              v-model="tab"
              background-color="blue lighten-4"
              color="blue darken-2"
              grow
            >
              <v-tab
                v-for="title in tabTitle"
                :key="title"
              >
                {{ title }}
              </v-tab>
            </v-tabs>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <loginForm/>
                </v-tab-item>
                <v-tab-item>
                  <registerForm/>
                </v-tab-item>
              </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import loginForm from '@/components/user/login.vue';
import registerForm from '@/components/user/register.vue';

export default {
  name: 'userSnapshot',
  components: {
    loginForm,
    registerForm,
  },
  data() {
    return {
      tab: null,
      tabTitle: [
        'ورود', 'ثبت نام',
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.dd {
  background-color:#90CAF9 !important;
  color: #fff !important;
}
</style>

<template>
  <v-container class="ma-0 pa-0">
      <v-row justify="center">
        <v-col
          cols="12"
          md="9"
        >
        <v-row class="ma-0 pa-0">
          <!-- 1 -->
          <v-col cols="12" md="7" class="box-sh white rounded-card1">
            <v-tabs
              class="pa-6"
              background-color="white"
              active-class="dd"
              v-model="tab"
              centered
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
            </v-col>
          <!-- 2 -->
          <v-col cols="12" md="5" class="white box-sh rounded-card2">
            <intro />
          </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import loginForm from '@/components/User/login.vue';
import registerForm from '@/components/User/register.vue';
import intro from '@/components/globalCmp/intro.vue';

export default {
  name: 'userSnapshot',
  components: {
    loginForm,
    registerForm,
    intro,
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
.v-application .white {
  border-color: #F3F3F3 !important;
}
.rounded-card2 {
  border-radius: 43px 0 0 34px;
}
.rounded-card1 {
  border-radius: 0 43px 43px 0;
  border-left: 1px solid #f3f3f3 !important;
}
.dd {
  background-color:#90CAF9 !important;
  color: #fff !important;
}
.v-tab {
  border-bottom: 2px solid  #1976d2 !important;
}
@media (min-width: 960px) {
  .offset-md-1 {
    margin-left: 3.333% !important;
  }
}
// .box-sh {
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//   0px 2px 2px 0px rgba(0, 0, 0, 0.14),
//   0px 1px 5px 0px rgba(0, 0, 0, 0.12);
// }
// .grad-color {
//   background-image: linear-gradient(#2196F3, #09487A );
// }
</style>

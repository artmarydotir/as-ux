<template>
  <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          offset-md="1"
        >
        <v-row>
          <!-- 1 -->
          <v-col cols="12" md="4" class="blue grad-color box-sh">
            <v-card
              class="mx-auto grad-color"
              max-width="400"
              flat
              color="blue"
            >
              <v-card-title class="text-center justify-center py-6">
                <v-img class="block"
                  width="200" contain height="200"
                  src="../../assets/index.svg.png">
                </v-img>
                <p class="py-5 white--text">
                  به آسام خوش آمدید
                </p>
              </v-card-title>
              <v-card-subtitle class="text-center justify-center py-2">
                تیم فنی آسام با کادری مجرب و حرفه ای همواره پشتیبان شما خواهد بود
              </v-card-subtitle>
                <v-img class="block mx-auto"
                  width="300" contain height="300"
                  src="../../assets/backgroud.png">
                </v-img>
            </v-card>
          </v-col>
          <!-- 2 -->
          <v-col cols="12" md="8" class="box-sh pa-0 grey lighten-4">
            <v-tabs
              class="pa-6"
              background-color="grey lighten-4"
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
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import loginForm from '@/components/User/login.vue';
import registerForm from '@/components/User/register.vue';

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
.v-tab {
  border-bottom: 2px solid  #1976d2 !important;
}
@media (min-width: 960px) {
  .offset-md-1 {
    margin-left: 3.333% !important;
  }
}
.box-sh {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
  0px 2px 2px 0px rgba(0, 0, 0, 0.14),
  0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.grad-color {
  background-image: linear-gradient(#2196F3, #09487A );
}
</style>

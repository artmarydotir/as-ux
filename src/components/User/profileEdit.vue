<template>
  <v-container>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <!-- avatar -->
          <v-card
              class="mx-auto text-center justify-center"
            >
              <v-card-text class="text--primary ">
                <v-row>
                  <v-col cols="12">
                    <v-avatar size="112px" class="border-wi">
                    <img class="mx-auto "
                      src="../../assets/userav.jpg"
                      alt="aasaam"
                    >
                  </v-avatar>
                  </v-col>
                  <v-col cols="12" class="pa-0">
                    <v-btn
                        color="orange lighten-5 orange--text"
                        depressed
                      >
                        افزودن آواتار
                    </v-btn>
                  </v-col>
                </v-row>
                <v-card-title class="display-5 justify-center ">
                  حساب کاربری مریم حقگو
                </v-card-title>
              </v-card-text>
            </v-card>
          <!-- avatar -->
          <!-- otp -->
          <div class="mt-8">
            <v-card
              class="mx-auto text-center justify-center"
            >
              <v-card-title class="display-6 blue white--text">
                فعال سازی رمز یکبار مصرف
              </v-card-title>
              <v-card-text class="text--primary ">
                <v-row>
                  <v-col cols="12" class="pt-4 mb-0 pb-0">
                    <v-alert
                      icon="mdi-shield-lock-outline"
                      prominent
                      text
                      type="info"
                    >
                    برای فعال سازی رمز یک بار مصرف پس از نصب اپلیکیشن کد زیر را اسکن بفرمایید.
                    </v-alert>
                  </v-col>
                  <v-col cols="12">
                    <v-row class="ma-0 pa-0">
                      <v-col cols="4" class="align-self-center">
                        <v-tooltip bottom >
                          <template v-slot:activator="{ on }">
                            <v-btn color="warning" dark v-on="on">
                              تولید مجدد کد
                            </v-btn>
                          </template>
                          <span>
                            با تولید مجدد کد, کد قبلی بلا استفاده میشود.
                          </span>
                        </v-tooltip>
                      </v-col>
                      <v-col cols="8" class="ma-0 pa-0">
                        <v-img src="../../assets/qcode.png" aspect-ratio="1.7" contain></v-img>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
          <!-- otp -->
        </v-col>
        <v-col cols="12" md="8">
          <v-divider vertical></v-divider>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'login',
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style lang="scss" scoped>
.border-wi {
  border: 70px solid #eee;
}
</style>

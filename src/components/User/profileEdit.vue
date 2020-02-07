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
                <v-icon class="pl-2">
                  mdi-key
                </v-icon>
                فعال سازی رمز پویا
              </v-card-title>
              <v-card-text class="text--primary ">
                <v-row>
                  <v-col cols="12">
                    <v-avatar size="116px" class="border-wi">
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
                <v-card-title class="justify-center ">
                  حساب کاربری مریم حقگو
                </v-card-title>
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

<template>
  <v-container>
      <v-row justify="center" class="my-12 py-8">
        <v-col
          cols="12"
          md="8"
          offset-md="1"
        >
          <v-row>
            <!-- 1 -->
            <v-col cols="12" md="4" class="blue grad-color box-sh">
              <intro :title="title"/>
            </v-col>
            <!-- 2 -->
            <v-col cols="12" md="8" class="box-sh pa-0 grey lighten-4">
              <v-card flat class="mx-auto grey lighten-4">
                  <v-card-title class="headline mx-auto text-center
                    justify-center pa-6">
                    بازیابی رمز عبور
                  </v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-row>
                        <v-col cols="12" md="8" class="mx-auto">
                          <v-text-field
                            label="شماره تلفن , ایمیل یا نام کاربری"
                            name="login"
                            type="text"
                            dir="ltr"
                            outlined
                            color="blue"
                            background-color="white"
                            prepend-inner-icon="mdi-account-outline"
                          />
                        </v-col>
                        <v-col cols="12" md="8" class="mx-auto">
                          <v-text-field
                            label="عبارت امنیتی"
                            name="captcha"
                            type="text"
                            dir="ltr"
                            outlined
                            color="blue"
                            background-color="white"
                            prepend-inner-icon="mdi-account-outline"
                          />
                        </v-col>
                        <v-col cols="12" md="8" class="mx-auto">
                          <v-row>
                            <v-col cols="12" md="7" class="py-0 pl-1">
                              <v-text-field
                                label="عبارت امنیتی"
                                name="captcha"
                                type="text"
                                dir="ltr"
                                outlined
                                color="blue"
                                background-color="white"
                                prepend-inner-icon="mdi-lock-question"
                              />
                            </v-col>
                            <v-col cols="12" md="4" class="pa-0 pl-0 pr-1">
                              <v-img width="180"
                                height="54" src="../../assets/captcha.png">
                              </v-img>
                            </v-col>
                            <v-col cols="12" md="1" class="py-0 pl-0 pr-1 pt-1">
                              <v-btn large text icon color="pink">
                                <v-icon>mdi-lock-reset</v-icon>
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                  <v-card-actions class="mx-auto text-center justify-center">
                    <v-btn to="/user/recovery"
                      x-large color="pink white--text" class="pl-12 pr-12">
                      ارسال ایمیل بازیابی رمز
                      <v-icon right dark>mdi-arrow-left</v-icon>
                    </v-btn>
                    <v-btn to="/"
                      x-large color="warning white--text" class="pl-12 pr-12">
                        لغو
                      <v-icon right dark>mdi-cancel</v-icon>
                    </v-btn>
                  </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import intro from '@/components/globalCmp/intro.vue';

export default {
  name: 'forgot',
  data() {
    return {
      title: 'بازیابی رمز عبور',
    };
  },
  components: {
    intro,
  },
};
</script>

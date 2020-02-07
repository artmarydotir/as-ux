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
            <v-card>
              <v-card-title class="display-6 blue white--text">
                ویرایش اطلاعات شخصی
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-row>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="نام"
                        name="userName"
                        v-model="userName"
                        type="text"
                        dir="ltr"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-account-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="نام خانوادگی"
                        name="userName"
                        v-model="userName"
                        type="text"
                        dir="ltr"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-account-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="نام کاربری"
                        name="userName"
                        v-model="userName"
                        type="text"
                        dir="ltr"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-account-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="ایمیل"
                        name="email"
                        v-model="userEmail"
                        type="text"
                        dir="ltr"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-email-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="شماره تلفن همراه"
                        name="mobileNumber"
                        v-model="mobileNumber"
                        type="text"
                        dir="ltr"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-lock-question"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="رمز عبور "
                        v-model="userPass"
                        :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-lock-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="رمز عبور جدید"
                        v-model="userPass"
                        :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-lock-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="تکرار رمز عبور جدید"
                        v-model="userPass"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-lock-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="رمز عبور قدیمی"
                        v-model="userPass"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-lock-outline"
                      />
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="pt-6">
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        v-mask="birthdaymask"
                        label="تاریخ تولد"
                        v-model="birthday"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-lock-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="آدرس اینستاگرام"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-instagram"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="آدرس توییتر"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-twitter"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        label="آدرس فیسبوک"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-facebook"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-textarea
                      prepend-inner-icon="mdi-home"
                        outlined
                        name="homeaddress"
                        label="آدرس منزل"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-textarea
                      prepend-inner-icon="mdi-home"
                        outlined
                        name="homeaddress"
                        label="آدرس محل کار"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
// import countryList from '@/components/globalCmp/countrySelect.vue';

import { mask } from 'vue-the-mask';

export default {
  name: 'login',

  directives: {
    mask,
  },
  data() {
    return {

      birthdaymask: '####-##-##',
      birthday: '13720727',
      userName: '',
      userEmail: '',
      userPass: '',
      mobileNumber: '',
      show1: false,
    };
  },
  components: {
    // countryList,
  },
};
</script>
<style lang="scss" scoped>
.border-wi {
  border: 70px solid #eee;
}
</style>

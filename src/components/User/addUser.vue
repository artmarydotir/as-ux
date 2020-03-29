<template>
  <div class="ma-4">
      <v-row justify="center">
        <v-col cols="12" md="4" lg="3">
          <v-row class="mt-0 pt-0">
            <v-col cols="12" sm="6" md="12">
              <!-- avatar -->
                <v-card
                    class="mx-auto text-center justify-center"
                    height="337px"
                  >
                    <v-card-text class="text--primary">
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
            </v-col>
            <v-col cols="12" sm="6" md="12" class="mt-5">
              <!-- otp -->
              <div>
                <v-card
                  class="mx-auto text-center justify-center"
                >
                  <v-card-title class="display-6 indigo white--text">
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
                        برای فعال سازی رمز یک بار مصرف
                        ابتدا بر روی گزینه ی راهنمای نصب کلیک کرده و اپلیکیشن را نصب کنید.
                          <v-btn text color="warning" dark>
                            راهنمای نصب
                          </v-btn>
                        </v-alert>
                      </v-col>
                      <v-col cols="12" class="pt-4 mb-0 pb-0">
                        <v-alert
                          icon="mdi-shield-lock-outline"
                          prominent
                          text
                          type="info"
                        >
                        لطفا رمز عبور فعلی خود را وارد کنید و گزینه ی تایید هویت را انتخاب کنبد.

                          <div class="pt-5">
                            <v-text-field
                              label="رمز عبور فعلی"
                              v-model="userPass"
                              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                              outlined
                              color="indigo"
                              background-color="blue darken-1"
                              prepend-inner-icon="mdi-lock-outline"
                            />
                          </div>
                          <v-btn text color="warning" dark>
                            تایید هویت
                          </v-btn>
                        </v-alert>

                      </v-col>
                      <v-col cols="12" class="pt-4 mb-0 pb-0">
                        <v-alert
                          icon="mdi-shield-lock-outline"
                          prominent
                          text
                          type="info"
                        >
                          بر روی گزینه ی ایجاد کدجدید کلیک کرده و کد ایجاد شده را در
                          اپلیکیشن خود اسکن کنید.
                          <v-btn text color="warning" dark>
                            ایجاد کد
                          </v-btn>
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
          </v-row>
        </v-col>
        <v-col cols="12" sm="7" md="8" lg="8">
          <v-row>
            <v-col cols="12">
              <v-card class="mb-5" >
                <v-card-title class="display-6 indigo white--text">
                  ویرایش اطلاعات اصلی
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-row>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                          label="نام کاربری"
                          name="userName"
                          v-model="userName"
                          type="text"
                          dir="ltr"
                          readonly
                          outlined
                          color="blue"
                          background-color="white"
                          prepend-inner-icon="mdi-account-outline"
                        />
                      </v-col>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
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
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                          label="شماره تلفن همراه"
                          name="mobileNumber"
                          v-model="mobileNumber"
                          type="text"
                          dir="ltr"
                          outlined
                          color="blue"
                          background-color="white"
                          prepend-inner-icon="mdi-cellphone-iphone"
                        />
                      </v-col>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                          label="رمز عبور فعلی"
                          v-model="userPass"
                          :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          outlined
                          hint="رمز عبور فعلی را جهت ویرایش اطلاعات اصلی وارد کنید."
                          color="blue"
                          background-color="white"
                          prepend-inner-icon="mdi-lock-outline"
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions class="mt-0 pt-0">
                  <v-spacer ></v-spacer >
                  <v-btn to="/user/profile"
                    large color="red white--text" class="ml-2 pl-8 pr-8 mb-2">
                    ویرایش اطلاعات
                    <v-icon right dark>mdi-pencil</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <!-- 2 -->
          <v-row>
            <v-col cols="12">
              <v-card class="mb-5" height="380px">
                <v-card-title class="display-6 indigo white--text">
                  ویرایش رمز عبور
                </v-card-title>
                <v-card-text>
                  <v-form>
                    <v-row>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                          label="رمز عبور فعلی"
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
                      <v-col cols="12" md="6" class="pb-0 mb-0">
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
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                          label="تکرار رمز عبور جدید"
                          v-model="userPass"
                          outlined
                          color="blue"
                          type="password"
                          background-color="white"
                          prepend-inner-icon="mdi-lock-outline"
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions class="mt-0 pt-0">
                  <v-spacer ></v-spacer >
                  <v-btn to="/user/profile"
                    large color="red white--text" class="ml-2 pl-8 pr-8 mb-2">
                    ویرایش رمز عبور
                    <v-icon right dark>mdi-pencil</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <!-- 2 -->
            <v-card class="mb-12">
              <v-card-title class="display-6 indigo white--text">
                ویرایش اطلاعات تکمیلی
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
                        prepend-inner-icon="mdi-account-arrow-left-outline"
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
                        prepend-inner-icon="mdi-account-multiple-outline"
                      />
                    </v-col>
                    <v-col cols="12" md="4" class="pb-0 mb-0">
                      <countryList />
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="pt-6">
                    <!-- <v-col cols="12" md="4" class="pb-0 mb-0">
                      <v-text-field
                        v-mask="birthdaymask"
                        label="تاریخ تولد"
                        v-model="birthday"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-calendar-account-outline"
                      />
                    </v-col> -->
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
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="mt-0 pt-0">
                <v-spacer ></v-spacer >
                <v-btn to="/user/profile"
                  large color="red white--text" class="ml-2 pl-8 pr-8 mb-2">
                  ویرایش اطلاعات تکمیلی
                  <v-icon right dark>mdi-pencil</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask';
import countryList from '@/components/globalCmp/countrySelect.vue';

export default {
  name: 'UserAdd',

  directives: {
    mask,
  },
  data() {
    return {
      genders: [
        'مرد',
        'زن',
      ],
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
    countryList,
  },
};
</script>
<style lang="scss" scoped>
.border-wi {
  border: 70px solid #eee;
}
</style>

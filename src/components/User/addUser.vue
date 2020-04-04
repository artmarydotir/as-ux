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
                      <v-row>
                        <v-col cols="12" md="4">
                          <v-switch  class="ma-2" label="تعلیق"></v-switch>
                        </v-col>
                        <v-col  cols="12" md="4">
                          <v-switch  class="ma-2" label="باز"></v-switch>
                        </v-col>
                        <v-col  cols="12" md="4">
                          <v-switch  class="ma-2" label="عادی"></v-switch>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                <!-- avatar -->
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="7" md="8" lg="8">
          <v-row>
            <v-col cols="12">
              <v-card class="mb-5" >
                <v-card-title class="display-6 indigo white--text">
                  افزودن اطلاعات اصلی
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
                        <countryList />
                      </v-col>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-text-field
                          label="رمز عبور "
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
                          label="تکرار رمز عبور"
                          v-model="userPass"
                          outlined
                          color="blue"
                          background-color="white"
                          prepend-inner-icon="mdi-lock-outline"
                        />
                      </v-col>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-select
                          :items="selectlang"
                          label="انتخاب زبان"
                          item-text="text"
                          item-value="value"
                          required
                          outlined
                          class="mx-auto"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="6" class="pb-0 mb-0">
                        <v-select
                          chips
                          outlined
                          class="mx-auto"
                          label="انتخاب گروه"
                          multiple
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions class="mt-0 pt-0">
                  <v-spacer ></v-spacer >
                  <v-btn to="/user/profile"
                    large color="red white--text" class="ml-2 pl-8 pr-8 mb-2">
                      افزودن کاربر جدید
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <!-- 2 -->
            <v-card class="mb-12">
              <v-card-title class="display-6 indigo white--text">
                افزودن اطلاعات تکمیلی
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
                      <v-text-field
                        label="تاریخ تولد"
                        outlined
                        color="blue"
                        background-color="white"
                        prepend-inner-icon="mdi-home"
                      />
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row class="pt-6">
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
                    افزودن اطلاعات تکمیلی
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
  </div>
</template>
<script>
import countryList from '@/components/globalCmp/countrySelect.vue';

export default {
  name: 'UserAdd',
  data() {
    return {
      selectlang: [
        {
          text: 'فارسی',
          value: 'fa',
        },
        {
          text: 'انگلیسی',
          value: 'en',
        },
      ],
      genders: [
        'مرد',
        'زن',
      ],
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

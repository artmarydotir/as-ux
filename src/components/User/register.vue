<template>
  <v-card flat color="grey lighten-4">
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="نام کاربری"
              name="userName"
              v-model="userName"
              type="text"
              dir="ltr"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="ایمیل"
              name="email"
              v-model="userEmail"
              type="text"
              dir="ltr"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="رمز عبور "
              v-model="userPass"
              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="تکرار رمز عبور"
              v-model="userPass"
            />
          </v-col>
          <v-col cols="12" md="6">
            <countryList class="country_locale" />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="شماره تلفن همراه"
              name="mobileNumber"
              v-model="mobileNumber"
              type="text"
              dir="ltr"
            />
          </v-col>
          <v-col cols="12" md="7">
            <v-text-field
              label="عبارت امنیتی"
              name="captcha"
              type="text"
              dir="ltr"
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-img class="float-right" width="210"
              height="50" src="../../assets/captcha.png">
            </v-img>
            <v-btn
              color="error"
              class="py-6 float-left white--text"
            >
              بازیابی
              <v-icon right dark>mdi-undo-variant</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn color="primary">
        ثبت نام
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { PhoneNumberUtil, PhoneNumberFormat, PhoneNumberType } from 'google-libphonenumber';

import countryList from '@/components/globalCmp/countrySelect.vue';

export default {
  name: 'register',
  components: {
    countryList,
  },
  methods: {
    formatters() {
      const ins = PhoneNumberUtil.getInstance();
      // const tel = ins.parse('+989017744142');
      // console.log(tel);
      const numi = ins.parseAndKeepRawInput('+989017744142', 'IR');
      console.log(numi);
      // console.log(numi.getCountryCode());
      // console.log(numi.getRawInput());
      // console.log(ins.isValidNumber(numi));

      // return rawPhoneNumber;
    },
  },
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   mobileNumber(oldV, newV) {
  //     this.mobileNumber = this.$options.filters.mobileFormat(this.mobileNumber);
  //   },
  // },
  data() {
    return {
      userName: '',
      userEmail: '',
      userPass: '',
      mobileNumber: '',
      show1: false,
    };
  },
};
</script>
<style lang="scss" scoped>
  .country_locale .v-listt {
    direction: ltr;
  }
</style>

<template>
  <v-card flat class="mx-auto grey lighten-4">
    <v-card-text>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
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
              label="رمز عبور شخصی"
              v-model="pass"
              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
              :type="show1 ? 'text' : 'password'"
              :hint="hint1"
              @click:append="show1 = !show1"
              :disabled="otp.length > 0 ? '' : disabled"
              outlined
              color="blue"
              background-color="white"
              prepend-inner-icon="mdi-lock-outline"
            />
          </v-col>
          <v-col cols="12" md="8" class="mx-auto">
            <v-text-field
              label="رمز یکبار مصرف"
              v-model="otp"
              :append-icon="show2 ? 'mdi-eye-off-outline' : 'mdi-eye'"
              :type="show2 ? 'text' : 'password'"
              :hint="hint2"
              @click:append="show2 = !show2"
              :disabled="pass.length > 0 ? '' : disabled"
              outlined
              color="blue"
              background-color="white"
              prepend-inner-icon="mdi-lock-reset"
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
      <v-btn x-large
        color="pink white--text"
        to="/dashboard/"
        class="pl-12 pr-12">
        ورود به حساب کاربری
        <v-icon right dark>mdi-arrow-left</v-icon>
      </v-btn>
    </v-card-actions>
    <v-divider class="ma-4 grey lighten-2"></v-divider>
    <v-row class="pa-4">
      <v-col cols="12" md="6" class="pb-0">
        <v-checkbox
          class="ma-0"
          v-model="rememberMe" label="مرا به خاطرت نگه دار">
        </v-checkbox>
      </v-col>
      <v-col cols="12" md="6" class="pb-0">
        <router-link to="/user/forgot" class="float-left">
          رمز عبور خود را فراموش کرده اید؟
        </router-link>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>

export default {
  name: 'login',
  data() {
    return {
      tab: null,
      valid: true,
      disabled: false,
      hint1: 'معایب استفاده از رمز عبور شخصی کدامند؟',
      hint2: 'چرا باید از رمزیکبار مصرف استفاده کنیم؟',
      show1: false,
      show2: false,
      rememberMe: false,
      otp: '',
      pass: '',
      lazy: false,
      tabTitle: [
        'ورود', 'ثبت نام',
      ],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

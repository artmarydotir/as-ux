<template>
  <v-card flat color="grey lighten-5">
    <v-card-text>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          label="شماره تلفن , ایمیل یا نام کاربری"
          name="login"
          type="text"
          dir="ltr"
        />
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="رمز عبور شخصی"
              v-model="pass"
              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
              :type="show1 ? 'text' : 'password'"
              :hint="hint1"
              @click:append="show1 = !show1"
              :disabled="otp.length > 0 ? '' : disabled"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="رمز یکبار مصرف"
              v-model="otp"
              :append-icon="show2 ? 'mdi-eye-off-outline' : 'mdi-eye'"
              :type="show2 ? 'text' : 'password'"
              :hint="hint2"
              @click:append="show2 = !show2"
              :disabled="pass.length > 0 ? '' : disabled"
            />
          </v-col>
        </v-row>
        <v-row>
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
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary">ورود</v-btn>
      <v-btn @click="reset" color="warning">لغو</v-btn>
    </v-card-actions>
    <v-divider class="ma-4"></v-divider>
    <div class="block text-center justify-center py-4">
      <v-checkbox class="block text-center justify-center"
        v-model="rememberMe" label="مرا به خاطرت نگه دار">
      </v-checkbox>
      <router-link to="/user/forgot">
        رمز عبور خود را فراموش کرده اید؟
      </router-link>
    </div>
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

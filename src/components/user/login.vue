<template>
  <v-card flat color="grey lighten-4">
    <v-card-text>
      <v-form>
        <v-text-field
          label="شماره تلفن , ایمیل یا نام کاربری"
          name="login"
          type="text"
          dir="ltr"
        />
        <v-text-field
          id="password"
          label="کلمه عبور"
          name="password"
          :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
          :type="show1 ? 'text' : 'password'"
          counter
          @click:append="show1 = !show1"
        />
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
              color="deep-orange darken-3"
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
      <v-btn color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>

export default {
  name: 'login',
  data() {
    return {
      tab: null,
      show1: false,
      tabTitle: [
        'ورود', 'ثبت نام',
      ],
    };
  },
};
</script>

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
          type="password"
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
              color="red"
              class="py-2 float-left white--text"
            >
              بازیابی
              <v-icon right dark>mdi-cloud-upload</v-icon>
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
      tabTitle: [
        'ورود', 'ثبت نام',
      ],
    };
  },
};
</script>

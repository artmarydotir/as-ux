<template>
  <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="7"
          offset-md="1"
        >
          <v-card>
            <v-card-title class="text-center justify-center py-6">
              <v-img width="80" contain height="80" src="../../assets/logo.png"></v-img>
            </v-card-title>
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field
                      label="شماره تلفن , ایمیل یا نام کاربری"
                      name="login"
                      type="text"
                      dir="ltr"
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
                  <v-btn color="primary">ارسال کد</v-btn>
                  <v-btn color="warning">لغو</v-btn>
                </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'forgot',
};
</script>

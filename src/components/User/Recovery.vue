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
              <p>
                کد تایید به ایمیل شما ارسال شده است.
                لطفا آن را در فیلد زیر وارد نمایید.
              </p>
              <span class="retry">
                ارسال دوباره کد؟
              </span>
            </v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-row justify="center">
                    <v-col cols="12">
                      <v-row>
                        <v-col cols="9" dir="ltr" offset-md="3">
                          <vue-fake-input
                            :length="5"
                            :fontSize="60"
                            inputColor="#31bce6"
                            fontColor="#ffc107"
                            :allowPaste="true"
                            v-model="fullpinCode"
                          />
                        </v-col>
                        <v-row v-if="fullpinCode.length > 4" class="pa-8">
                          <v-col cols="12" md="6">
                            <v-text-field
                              label="رمز عبور جدید"
                              v-model="userNewPass"
                              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field
                              label="تکرار رمز عبور"
                              v-model="userrpPass"
                            />
                          </v-col>
                        </v-row>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">
                  تایید و تغییر رمز
                </v-btn>
                <v-btn color="warning" to="/user/forgot">
                  بازگشت
                </v-btn>
              </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'recovery',
  data() {
    return {
      fullpinCode: '',
      userNewPass: '',
      userrpPass: '',
      show1: false,
    };
  },
};
</script>
<style lang="scss">
.retry {
  font-size: 13px;
  color: blueviolet;
  margin-bottom: 12px;
  padding-right: 6px;
}

</style>

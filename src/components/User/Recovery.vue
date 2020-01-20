<template>
  <v-container>
      <v-row justify="center" class="mx-auto">
        <v-col
          cols="12"
          md="7"
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
                        <v-col cols="5" dir="ltr" class="mx-auto">
                          <vue-fake-input
                            class="mx-auto"
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
                              :class="passwordClasses"
                              :hint="userNewPass.length ? strength : ''"
                              persistent-hint
                              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1"
                              outlined
                              color="blue"
                              background-color="white"
                              prepend-inner-icon="mdi-lock-outline"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field
                              label="تکرار رمز عبور"
                              v-model="userrpPass"
                              outlined
                              color="blue"
                              background-color="white"
                              prepend-inner-icon="mdi-lock-outline"
                            />
                          </v-col>
                        </v-row>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="mx-auto text-center justify-center">
                <v-btn to="/"
                  x-large color="pink white--text" class="pl-12 pr-12">
                   تایید و تغییر رمز
                  <v-icon right dark>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn to="/user/forgot"
                  x-large color="warning white--text" class="pl-12 pr-12">
                    بازگشت
                  <v-icon right dark>mdi-cancel</v-icon>
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
  computed: {
    strength() {
      const { length } = this.userNewPass;
      const strength = {
        Strong: length >= 12,
        Medium: length < 12 && length >= 8,
        Weak: length < 8,
      };
      return Object.keys(strength).find(key => strength[key]);
    },
    passwordClasses() {
      // if (this.strength === 'Strong') {
      //   return 'password-strength--Str';
      // }
      return `password-strength--${this.strength}`;
    },
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

  .password-strength--Weak .v-messages__message {
    color: red !important
  }
  .password-strength--Medium .v-messages__message {
    color: orange !important
  }
  .password-strength--Strong .v-messages__message {
    color: green !important
  }
</style>

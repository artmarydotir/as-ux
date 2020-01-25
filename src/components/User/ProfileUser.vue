<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="5" class="pa-6">
        <v-card
        >
          <v-img
            class="white--text align-start blue"
            height="100px"
          >
            <v-card-title>
              حساب کاربری مریم حقگو
            </v-card-title>
          </v-img>
          <!-- <div class="text-center my-6">
            <v-avatar size="96px">
              <img
                src="../../assets/logo.png"
                alt="aasaam"
              >
            </v-avatar>
          </div> -->

          <v-card-text class="text--primary">
            <v-form>
              <v-row justify="center">
                <v-col cols="12" md="6">
                  <v-text-field
                    dense
                    label="نام کاربری"
                    v-model="userNewPass"
                    outlined
                    color="blue"
                    background-color="white"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    dense
                    label="ایمیل"
                    v-model="userNewPass"
                    outlined
                    color="blue"
                    background-color="white"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    dense
                    label="رمز عبور فعلی"
                    v-model="userNewPass"
                    outlined
                    color="blue"
                    background-color="white"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    dense
                    label="رمز عبور جدید"
                    v-model="userNewPass"
                    outlined
                    color="blue"
                    background-color="white"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    dense
                    label="تکرار رمز عبور جدید"
                    v-model="userNewPass"
                    outlined
                    color="blue"
                    background-color="white"
                  />
                </v-col>
              </v-row>
            </v-form>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
            >
              Share
            </v-btn>

            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="pa-6">
        2
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'profileUser',
};
</script>

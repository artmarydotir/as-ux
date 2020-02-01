<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" class="pa-6">
        <v-card class="pa-8">
          <v-card-text class="text--primary">
            <v-row>
              <!-- 1 -->
              <v-col cols="12" md="2" class="align-self-center">
                <v-avatar size="112px">
                  <img
                    src="../../assets/userav.jpg"
                    alt="aasaam"
                  >
                </v-avatar>
              </v-col>
              <!-- 2 -->
              <v-col cols="12" md="6">
                <v-card-title class="blue--text">
                  حساب کاربری ژولیت بینوش
                </v-card-title>
                <v-card-subtitle class="pt-3">
                  هنرپیشهٔ فرانسوی
                </v-card-subtitle>
                <div class="pa-3">
                  بینوش از مادری هنرپیشه و پدری مجسمه‌ساز متولد شد.
                  در ۲۳ سالگی پس از بازی در فیلم سبکی تحمل‌ناپذیر وجود
                  باعث توجه بسیاری از منتقدین سینما شد
                </div>
                <v-card-actions>
                  <v-btn
                    color="orange" dark
                  >
                    نمایش جزیيات پروفایل
                  </v-btn>
                </v-card-actions>
              </v-col>
              <!-- 3 -->
              <v-col cols="12" md="4" class="border-r text-center justify-center">
                <v-card-subtitle>
                  <span>
                    09017744142
                  </span>
                  <v-icon color="warning" small>mdi-phone-outline</v-icon>
                </v-card-subtitle>
                <v-card-subtitle>
                  <span>
                    artmary.ir@gmail.com
                  </span>
                  <v-icon color="warning" small>mdi-email-outline</v-icon>
                </v-card-subtitle>
                <div class="pt-10">
                  <v-btn color="pink" text fab small>
                    <v-icon>mdi-email-outline</v-icon>
                  </v-btn>
                  <v-btn color="pink" text class="ml-4 mr-4" fab small>
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>
                  <v-btn color="pink" text fab small>
                    <v-icon color="pink lighten-2">mdi-facebook</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'profileUser',
};
</script>
<style lang="scss" scoped>
.border-r {
  border-right: 1px solid rgb(224, 224, 224);
}
</style>

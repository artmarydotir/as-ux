<template>
<v-container>
  <v-card flat class="pa-4 grey lighten-3 my-2">
    <v-card-title>
      افزودن نوع برچسب
    </v-card-title>
      <v-form>
        <v-row>
          <v-col cols="12" md="3">
            <!-- 1 -->
            <v-text-field
              v-model="tagTitle"
              flat
              :rules="nameRules"
              :counter="20"
              label="عنوان"
              required
              solo
            ></v-text-field>
          </v-col>
          <!-- 2 -->
          <v-col cols="12" md="3">
            <v-select
              flat
              v-model="typeStatusde"
              :items="typeStatus"
              :rules="[v => !!v || 'الزامی']"
              label="نوع برچسب"
              required
              solo
            ></v-select>
          </v-col>
          <!-- 3 -->
          <v-col cols="12" md="4">
            <v-select
              flat
              solo
              v-model="e7"
              :items="modules"
              :rules="[v => !!v || 'الزامی']"
              label="انتخاب ماژول"
              multiple
              chips
              hint="شما میتوانید یک یا چند ماژول را انتخاب کنید "
              persistent-hint
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-select
              flat
              v-model="langselect"
              :items="lang"
              :rules="[v => !!v || 'الزامی']"
              label="انتخاب زبان"
              required
              solo
            ></v-select>
          </v-col>
        </v-row>
        <!-- buttons -->
        <v-row>
          <v-col cols="12">
            <div class="ma-4 float-left">
              <v-btn color="pink white--text">ذخیره و جدید</v-btn>
            </div>
            <div class="ma-4 float-left">
              <v-btn class="white--text" color="indigo">ذخیره</v-btn>
            </div>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</v-container>
</template>
<script>
export default {
  name: 'TypeTag',
  data() {
    return {
      valid: true,
      typeStatusde: '',
      e7: '',
      tagTitle: '',
      nameRules: [
        v => !!v || ' الزامی است',
        v => (v && v.length <= 10) || 'عنوان نباید کمتر از ۳ کاراکتر باشد',
      ],
      typeStatus: [
        'منفرد',
        'چندگانه',
      ],
      lang: [
        'فارسی',
        'انگلیسی',
      ],
      modules: [
        'خبر',
        'تبلیغات',
        'روزنامه',
        'مولف',
      ],
    };
  },
};
</script>

<template>
<v-container>
  <v-card flat class="pa-4 grey lighten-2 my-2">
    <v-card-title>
      افزودن برچسب
    </v-card-title>
    <v-form ref="form" v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            <v-select
              flat
              :items="typeselect"
              :rules="[v => !!v || 'الزامی']"
              label="افزودن نوع"
              required
              solo
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
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
          <v-col
            cols="12"
            md="2"
          >
            <v-switch v-model="parent"
            color="pink darken-3"
            class="ma-4" label="برچسب تایید شده">
            </v-switch>
          </v-col>
          <v-col
            cols="12"
            md="5"
          >
            <ck msg="Welcome to Your Vue.js App"/>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-autocomplete
              :items="childtag"
              chips
              flat
              small-chips
              label="انتخاب والد"
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-autocomplete
              :items="childtag"
              chips
              flat
              multiple
              small-chips
              label="انتخاب فرزند"
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
          <v-autocomplete
              :items="childtag"
              chips
              flat
              multiple
              small-chips
              label="برچسب های مستعار"
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-autocomplete
              :items="service"
              chips
              flat
              small-chips
              label="افزودن سرویس"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-file-input flat solo label="افزودن فایل اصلی"></v-file-input>
          </v-col>
          <v-col
            cols="12"
            md="8"
          >
            <v-textarea
              solo
              flat
              name="input-7-1"
              label="متن برچسب"
              value=""
            ></v-textarea>
          </v-col>
          <v-col
            cols="12"
            md="8"
          >
            <v-textarea
              solo
              flat
              name="input-7-1"
              label="میکرو دیتاهای برچسب"
              value=""
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="ma-4 float-left">
              <v-btn class="white--text" color="indigo">ذخیره</v-btn>
            </div>
            <div class="ma-4 float-left">
              <v-btn color="pink white--text">ذخیره و جدید</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</v-container>
</template>
<script>
import ck from '@/components/ck.vue';

export default {
  name: 'tagDetail',
  data() {
    return {
      valid: true,
      parent: true,
      linkToparent: false,
      select: null,
      tagDesc: '',
      langselect: '',
      tagTitle: '',
      nameRules: [
        v => !!v || ' الزامی است',
        v => (v && v.length <= 10) || 'عنوان نباید کمتر از ۳ کاراکتر باشد',
      ],
      tagStatus: [
        'نامشخص',
        'کلمه کلیدی',
      ],
      typeselect: [
        'کلمه کلیدی',
        'بیمارستان',
        'نوع خبر',
      ],
      service: [
        'سیاسی',
        'اقتصادی',
        'فرهنگی',
      ],
      lang: [
        'فارسی',
        'انگلیسی',
      ],
      childtag: [
        'نیویورک',
        'آمریکا',
        'خوشحال',
        'شادی',
        'شعف',
      ],
    };
  },
  components: {
    ck,
  },
};
</script>

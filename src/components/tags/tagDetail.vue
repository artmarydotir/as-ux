<template>
<v-container class="ma-8">
  <v-card class="pa-4 red lighten-5">
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
            md="4"
          >
            <v-text-field
              v-model="tagDesc"
              label="توضیحات"
              required
              flat
              solo
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >
            <v-select
              flat
              v-model="select"
              :items="tagStatus"
              :rules="[v => !!v || 'الزامی']"
              label="وضعیت"
              required
              solo
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-switch v-model="parent" class="ma-4" label=" برچسب والد">
            </v-switch>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-autocomplete
              :items="childtag"
              dense
              chips
              flat
              small-chips
              label="برچسب های مترادف"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="2">
            <v-switch v-model="linkToparent" class="ma-2" label="لینک به برچسب والد">
            </v-switch>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-autocomplete
              :items="service"
              dense
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
          <v-autocomplete
              :items="service"
              dense
              flat
              chips
              small-chips
              label="افزودن مولف"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
          <v-autocomplete
              :items="service"
              dense
              flat
              chips
              small-chips
              label="افزودن کمپانی"
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
            md="5"
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
              label="میکرپدیتاهای برچسب ( عنوان)"
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
export default {
  name: 'tagDetail',
  data() {
    return {
      valid: true,
      parent: true,
      linkToparent: false,
      select: null,
      tagDesc: '',
      tagTitle: '',
      nameRules: [
        v => !!v || ' الزامی است',
        v => (v && v.length <= 10) || 'عنوان نباید کمتر از ۳ کاراکتر باشد',
      ],
      tagStatus: [
        'نامشخص',
        'کلمه کلیدی',
      ],
      service: [
        'سیاسی',
        'اقتصادی',
        'فرهنگی',
      ],
      childtag: [
        'خوشحال',
        'شادی',
        'شعف',
      ],
    };
  },
};
</script>

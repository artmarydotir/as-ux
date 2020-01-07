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
            md="7"
          >
            <CKEditor v-model="texteditorprop" />
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
              color="blue-grey"
              class="white--text"
              @click='open = !open'
            >
              جزیات پیشرفته
              <v-icon right>
                mdi-arrow-down-thick
              </v-icon>
            </v-btn>
          </v-col>
          <!-- advance  -->
          <v-row class="pa-3" v-show="open">
            <v-col
              cols="12"
              md="2"
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
              md="3"
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
              md="2"
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
              md="2"
            >
            <label>
              ترتیب
            </label>
              {{ bpm }}
              <v-slider
                v-model="bpm"
                track-color="grey"
                always-dirty
                min="1"
                max="100"
              >
                <template v-slot:prepend>
                  <v-icon
                    @click="decrement"
                  >
                    mdi-minus
                  </v-icon>
                </template>

                <template v-slot:append>
                  <v-icon
                    @click="increment"
                  >
                    mdi-plus
                  </v-icon>
                </template>
              </v-slider>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="tagTitle"
                flat
                :rules="nameRules"
                :counter="20"
                label="عنوان سئو"
                required
                solo
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="tagTitle"
                flat
                :rules="nameRules"
                :counter="20"
                label="توضیحات سئو"
                required
                solo
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-file-input flat solo label="افزودن فایل اصلی"></v-file-input>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="tagTitle"
                flat
                label="تیتر"
                required
                solo
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="tagTitle"
                flat
                label="روتیتر"
                required
                solo
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="tagTitle"
                flat
                label="زیرتیتر"
                required
                solo
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="12"
            >
              <CKEditor v-model="ckcontent" />
            </v-col>
          </v-row>
        </v-row>
        <!-- action  -->
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
import CKEditor from '@/components/ck.vue';

export default {
  name: 'tagDetail',
  data() {
    return {
      open: false,
      bpm: 1,
      valid: true,
      texteditorprop: 'توضیحات',
      ckcontent: 'متن برچسب',
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
    CKEditor,
  },
  methods: {
    decrement() {
      // eslint-disable-next-line no-plusplus
      this.bpm--;
    },
    increment() {
      // eslint-disable-next-line no-plusplus
      this.bpm++;
    },
  },
};
</script>

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
          <v-col cols="12" md="6">
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
            md="3"
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
            md="3"
          >
            <v-select
              flat
              v-model="layoutseelct"
              :items="layouts"
              :rules="[v => !!v || 'الزامی']"
              label="انتخاب پوسته"
              required
              solo
            ></v-select>
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-subheader>
              شما میتوانید با استفاده از گزینه های زیر فیلد جدیدی ایجاد کنید:
            </v-subheader>
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-row>
              <v-col cols="12" md="8" v-for="(custom, k) in customs" :key="k">
                <v-row class="my-0 py-0">
                  <!-- 1 -->
                  <v-col cols="12" md="5">
                    <v-text-field
                      v-model="custom.name"
                      flat
                      label="عنوان"
                      required
                      solo
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5">
                    <!-- <v-text-field
                      v-model="custom.type"
                      flat
                      label="نوع"
                      required
                      solo
                    ></v-text-field> -->
                    <v-select
                      flat
                      v-model="custom.type"
                      :items="selectCustomTypes"
                      :rules="[v => !!v || 'الزامی']"
                      label="نوع"
                      required
                      solo
                    ></v-select>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      v-show="k == customs.length -1"
                      @click="add(k)"
                      class="mx-2" fab dark small color="green">
                      <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn
                      v-show="k || (!k && customs.length > 1 )"
                      @click="remove(k)"
                      class="mx-2" fab dark small color="red">
                      <v-icon dark>mdi-minus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
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
      customs: [
        {
          name: '',
          type: '',
        },
      ],
      selectCustomTypes: [
        'int',
        'url',
        'short string',
        'long string',
      ],
      valid: true,
      typeStatusde: '',
      layoutseelct: '',
      langselect: 'fa',
      layouts: [
        'default',
        'tag',
        'city',
      ],
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
  methods: {
    // eslint-disable-next-line no-unused-vars
    add(index) {
      this.customs.push({
        name: '',
        type: '',
      });
    },
    remove(index) {
      this.customs.splice(index, 1);
    },
  },
};
</script>

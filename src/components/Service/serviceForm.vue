<template>
  <v-container>
    <v-card>
      <v-card-title class="indigo white--text">
        لیست سرویس ها
      </v-card-title>
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-select
            :items="selectlang"
            label="انتخاب زبان"
            item-text="text"
            item-value="value"
            required
            outlined
            class="mx-auto"
          ></v-select>
        </v-col>
      </v-row>
      <!-- 2 -->
      <v-row class="pa-4" justify="space-between">
        <v-col cols="12" md="5">
            <tree :item="item" @readyToUpdate="updateparentDate"></tree>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="d-flex text-center">
          <v-form>
            <v-row v-if="!item.length">
              <v-col cols="12">
                هیچ فرزندی انتخاب نشده است.
              </v-col>
            </v-row>
            <v-row v-else v-for="i in item" :key="i.id">
              <v-col cols="12" md="4" class="pb-0 mb-0">
                <v-text-field
                  label="عنوان"
                  name="serviceName"
                  v-model="i.name"
                  type="text"
                  outlined
                  color="blue"
                  background-color="white"
                />
                <v-text-field
                  label="عنوان سئو"
                  name="serviceName"
                  v-model="i.name"
                  type="text"
                  outlined
                  color="blue"
                  background-color="white"
                />
                <!-- {{ item }} -->
              </v-col>
              <v-col cols="12" md="4" class="pb-0 mb-0">
                <v-select
                  flat
                  :items="layouts"
                  label="انتخاب پوسته"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" md="4" class="pb-0 mb-0">
                <v-select
                  flat
                  solo
                  :items="modules"
                  label="انتخاب ماژول"
                  multiple
                  outlined
                  chips
                ></v-select>
              </v-col>
              <v-col cols="12" md="3">
                <v-checkbox
                  class="ma-0"
                  v-model="rememberMe" label="انتشار">
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="3">
                <v-checkbox
                  class="ma-0"
                  v-model="rememberMe" label="قفل">
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="3">
                <v-checkbox
                  class="ma-0"
                  v-model="rememberMe" label="قابل مشاهده">
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="3">
                <v-checkbox
                  class="ma-0"
                  v-model="rememberMe" label="دنبال کردن">
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="9" class="pb-0 mb-0">
                <tagCmp :val="tagselect" @tagchanged="parentTag"/>
                <!-- {{ tagselect }} -->
              </v-col>
              <v-col cols="12" md="3" class="pb-0 mb-0">
                <v-btn
                  color="blue-grey"
                  class="white--text"
                  @click='open = !open'>
                    جزیات پیشرفته
                </v-btn>
              </v-col>
            </v-row>
            <v-divider ></v-divider>
            <!-- advanced box  -->
            <v-row v-show="open" class="pt-3 pb-3">
              <!-- 1 -->
              <v-col cols="12" md="6" >
                <v-text-field
                  class="text-lg-left"
                  label="ویرایش لینک"
                  value="/sevices/1/ورزشی"
                  outlined
                  dir="ltr"
                ></v-text-field>
              </v-col>
              <!-- 2 -->
              <v-col cols="12" md="6" >
                <v-text-field
                  class="text-lg-left"
                  label="ویرایش آدرس RSS"
                  value="/fa/feeds/?p=ZGF0ZVJhbmdlJTVCc3RhcnQlNUQ9LTI1OTIwMA%2C%2C"
                  outlined
                  dir="ltr"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" >
                <v-text-field
                  class="text-lg-left"
                  label="لینک کوتاه"
                  value="/s/1"
                  outlined
                  dir="ltr"
                ></v-text-field>
              </v-col>
              <!-- 3 -->
              <v-col cols="12" md="6">
                <v-file-input outlined accept="image/*" label="انتخاب عکس"></v-file-input>
              </v-col>
            </v-row>
            <!-- save  -->
            <v-card-actions class="mb-6">
              <v-spacer />
              <v-btn to="/user/recovery"
                large color="pink white--text" class="pl-12 pr-12">
                  ذخیره
              </v-btn>
              <v-btn to="/"
                large color="warning white--text" class="pl-12 pr-12">
                  لغو
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-col>
      </v-row>
    </v-card>

    ۳ مورد برای سرویس انجام ندادی توی قسمت جزییات پیشرفته
  </v-container>
</template>
<script>
import tree from '@/components/globalCmp/tree.vue';
import tagCmp from '@/components/globalCmp/TagCmp.vue';

export default {
  name: 'serviceForm',
  methods: {
    parentTag(tag) {
      this.tagselect = tag;
    },
    updateparentDate(newDate) {
      this.item = newDate;
      // console.log('parent', this.date);
    },
  },
  data() {
    return {
      tagselect: [],
      open: false,
      item: [
        {
          id: 1,
          name: 'سرویس ها',
          isleaf: false,
          children: [],
        },
      ],
      rememberMe: true,
      serviceName: '',
      layouts: [
        'default',
        'tag',
        'city',
      ],
      modules: [
        'خبر',
        'تبلیغات',
        'روزنامه',
        'مولف',
      ],
      selectlang: [
        {
          text: 'فارسی',
          value: 'fa',
        },
        {
          text: 'انگلیسی',
          value: 'en',
        },
      ],
    };
  },
  components: {
    tree,
    tagCmp,
  },
};
</script>

<template>
  <v-container>
    <v-data-table :headers="headers" :items="usersData"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat class="grey lighten-2">
          <v-toolbar-title>
            لیست سرویس ها
          </v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-4">
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              class="ml-10"
              dense v-model="titleFilterVal" type="text" label="عنوان">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <v-select
                dense
                :items="publish"
                v-model="publishFilterValue"
                label="وضعیت انتشار"
            ></v-select>
          </v-col>
          <v-col cols="2" class="mr-9">
            <v-select
                dense
                :items="lock"
                v-model="lockFilterValue"
                label="وضعیت قفل"
            ></v-select>
          </v-col>
        </v-row>
      </template>
      <!-- delete  -->
      <template v-slot:body.prepend>
          <v-dialog v-model="dialog" max-width="800px">
            <v-card>
              <v-card-title>
                <span class="headline mb-3">
                  حذف سرویس
                </span>
              </v-card-title>
              <v-card-text>
                <v-stepper v-model="e1">
                  <v-stepper-header>
                    <v-stepper-step
                      step="1"

                    >
                      <span class="pl-2 pr-2">
                        هشدار
                      </span>
                    </v-stepper-step>
                    <v-divider></v-divider>

                    <v-stepper-step
                      step="2"
                      editable
                      :complete="e1 > 1"
                    >
                      <span class="pl-2 pr-2">
                        انتخاب سرویس جایگزین
                      </span>
                    </v-stepper-step>
                  </v-stepper-header>
                  <v-stepper-items>
                      <v-stepper-content step="1">
                        <v-alert
                          color="warning"
                          dark
                          icon="mdi-alert"
                          border="left"
                          prominent
                        >
                        کاربر گرامی سرویسی که قصد حذف آن را دارید
                        در ۴۵۳ خبر و ۴۸ فایل و ۶ نظرسنجی استفاده شده است.
                        آیا برای حذف این سرویس مطمعنید؟
                        </v-alert>
                        <div class="mx-auto text-center justify-center">
                          <v-btn
                            color="secondary"
                            @click="e1 = 2"
                          >
                            بله مطمعنم
                          </v-btn>
                        </div>
                      </v-stepper-content>
                      <v-stepper-content step="2">
                          <v-row>
                            <v-col cols="12">
                              <v-alert
                                border="left"
                                type="success"
                              >
                                کاربر گرامی برای سرویسی که حذف کرده اید
                                یک گروه جدید انتخاب کنید.
                              </v-alert>
                            </v-col>
                            <v-col cols="12">
                              <v-select
                                outlined
                                :items="newgroup"
                                label="انتخاب سرویس جدید"
                              ></v-select>
                            </v-col>
                            <v-col cols="12">
                              <v-checkbox
                                v-model="checkbox"
                                label="تمامی تغییرات جدید مربوط به این سرویس را میپذیرم."
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12">
                            <v-btn
                                :disabled="!checkbox"
                                color="secondary"
                                @click="asurance"
                              >
                                اعمال تغییرات
                              </v-btn>
                            </v-col>
                          </v-row>
                      </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
              </v-card-text>
            </v-card>
          </v-dialog>
      </template>
      <!-- body  -->
      <template v-slot:item.lock="{ item }">
          <v-chip small class="success white--text" v-if="item.lock == 'lock'">
            قفل
          </v-chip>
          <v-chip small class="pl-4 pr-4 pink white--text" v-if="item.lock == 'unlock'">
            باز
          </v-chip>
        </template>
      <template v-slot:item.publish="{ item }">
          <v-chip small class="success white--text" v-if="item.publish == true">
            منتشر شده
          </v-chip>
          <v-chip small v-if="item.publish === false">
            منتشر نشده
          </v-chip>
        </template>
        <template v-slot:item.action="{ item }">
            <v-btn :to="`/service/edit/${item.id}`" text icon class="ml-3" color="primary">
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn @click="deleteItem(item.id)" text icon class="ml-3" color="error">
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
        </template>
        <template v-slot:no-results>
          هیچ داده ای یافت نشد!
        </template>
    </v-data-table>
  </v-container>
</template>
<script>
import tableData from '../../assets/serviceList.json';

export default {
  name: 'serviceTableList',
  data() {
    return {
      e1: 1,
      dialog: false,
      checkbox: false,
      publish: [
        { text: 'همه', value: null },
        { text: 'منتشر شده', value: true },
        { text: 'منتشر نشده', value: false },
      ],
      newgroup: ['اخبار', 'سیاسی', 'اجتماعی'],
      lock: [
        { text: 'همه', value: null },
        { text: 'قفل', value: 'lock' },
        { text: 'باز', value: 'unlock' },
      ],
      // Filter models.
      publishFilterValue: '',
      lockFilterValue: '',
      titleFilterVal: '',
      // Table data.
      usersData: tableData.data,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'عنوان',
          sortable: false,
          value: 'title',
          filter: this.nameFilter,
        },
        {
          text: 'وضعیت انتشار',
          sortable: true,
          value: 'publish',
          filter: this.publishFilter,
        },
        {
          text: 'وضعیت قفل',
          sortable: false,
          value: 'lock',
          filter: this.lockFilter,
        },
        {
          text: 'پوسته',
          value: 'layout',
          sortable: true,
          filter: this.emailFilter,
        },
        { text: 'تغییرات', value: 'action', sortable: false },
      ];
    },
  },
  methods: {
    nextStep(n) {
      if (n === this.e1) {
        this.e1 = this.e1 + 1;
      } else {
        this.e1 = 1;
      }
    },
    nameFilter(value) {
      if (!this.titleFilterVal) {
        return true;
      }
      return value.toLowerCase().includes(this.titleFilterVal.toLowerCase());
    },
    publishFilter(value) {
      if (!this.publishFilterValue) {
        return true;
      }
      return value === this.publishFilterValue;
    },
    lockFilter(value) {
      if (!this.lockFilterValue) {
        return true;
      }
      return value === this.lockFilterValue;
    },
    deleteItem(item) {
      this.dialog = true;
      console.log(item);
    },
    asurance() {
      this.dialog = false;
    },
  },
};
</script>
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

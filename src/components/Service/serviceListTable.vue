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
            <v-btn text icon class="ml-3" color="error">
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
      publish: [
        { text: 'همه', value: null },
        { text: 'منتشر شده', value: true },
        { text: 'منتشر نشده', value: false },
      ],
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
    /**
     * Filter for dessert names column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    nameFilter(value) {
      if (!this.titleFilterVal) {
        return true;
      }
      return value.toLowerCase().includes(this.titleFilterVal.toLowerCase());
    },

    publishFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.publishFilterValue) {
        return true;
      }
      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value === this.publishFilterValue;
    },
    lockFilter(value) {
      // console.log(this.lockFilterValue);
      if (!this.lockFilterValue) {
        return true;
      }
      return value === this.lockFilterValue;
    },
  },
};
</script>
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

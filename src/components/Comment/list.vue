<template>
  <v-container>
    <v-data-table
      :headers="headers"
      show-expand
      :items="desserts"
      single-expand
      :expanded.sync="expanded"
      item-key="id"
      class="elevation-1"
    >
        <template v-slot:top>
          <v-toolbar dark flat class="blue lighten-1">
            <v-toolbar-title>
              لیست دیدگاه ها
            </v-toolbar-title>
          </v-toolbar>
          <v-row class="pa-4" align="center"
            justify="center">
            <v-col cols="2">
              <!-- Filter for type name-->
              <v-text-field
                class="ml-10"
                dense v-model="dessertFilterValue" type="text" label="جستجو عنوان">
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <!-- Filter for type name-->
              <v-text-field
                dense class="ml-10"
                v-model="serviceFilter" type="text" label="جستجو سرویس">
              </v-text-field>
            </v-col>
            <v-col cols="3">
              <v-select
                dense
                :items="isParent"
                v-model="parentFilterValue"
                label="برچسب والد"
              ></v-select>
            </v-col>
            <v-col cols="2">
              <v-select
                  dense
                  :items="status"
                  v-model="statusFilterValue"
                  label="وضعیت"
              ></v-select>
            </v-col>
          </v-row>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            {{ item.title }}
          </td>
        </template>
        <template v-slot:item.title="{ item }">
          {{ item.title  | str_limit(24) }}
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon
            class="blue--text ml-4"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            class="red--text"
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:item.readFunc="{ item }">
          <v-checkbox
            v-model="selectedCustomerCodes"
            v-bind:value="item"
            @change="loadCustomerDispensers(item.status)">
          </v-checkbox>
        </template>
        <template v-slot:no-results>
          هیچ داده ای یافت نشد!
        </template>
      </v-data-table>
    </v-container>
  </template>
<script>

import tableData from '../../assets/sampleCm.json';

export default {
  name: 'commentList',
  data() {
    return {
      expanded: [],
      selectedCustomerCodes: [],
      // We need some values for our select.
      isParent: [
        { text: 'همه', value: null },
        { text: 'والد', value: true },
        { text: 'فرزند', value: false },
      ],
      status: [
        { text: 'همه', value: null },
        { text: 'تایید شده', value: 'verify' },
        { text: 'پیش نویس', value: 'draft' },
      ],
      // Filter models.
      dessertFilterValue: '',
      serviceFilter: '',
      typeFilterValue: null,
      parentFilterValue: null,
      statusFilterValue: null,
      // Table data.
      desserts: tableData.data,
    };
  },
  computed: {
    headers() {
      return [
        { text: '', value: 'data-table-expand' },
        {
          text: 'آیدی',
          sortable: false,
          value: 'id',
          filter: this.nameFilter,
        },
        {
          text: 'عنوان دیدگاه',
          sortable: false,
          value: 'title',
        },
        {
          text: 'آیدی والد',
          sortable: true,
          value: 'parentId',
        },
        {
          text: 'وضعیت',
          value: 'status',
          sortable: false,
        },
        {
          text: 'ایمیل',
          value: 'email',
          sortable: false,
        },
        {
          text: 'تاریخ',
          value: 'date',
          sortable: true,
        },
        {
          text: 'مشخصه خبر',
          value: 'newsId',
          filter: this.statusFilter,
        },
        {
          text: 'تغییرات', value: 'action', sortable: false,
        },
        {
          text: 'بررسی', value: 'readFunc', sortable: false,
        },
      ];
    },
  },
  filters: {
    str_limit(value, size) {
      if (!value) return '';
      // eslint-disable-next-line no-param-reassign
      value = value.toString();

      if (value.length <= size) {
        return value;
      }
      return `${value.substr(0, size)}...`;
    },
  },
  methods: {
    loadCustomerDispensers(customerCode) {
      console.log(customerCode);
    },
    nameFilter(value) {
      // console.log('سرچ فیلتر');
      // If this filter has no value we just skip the entire filter.
      if (!this.dessertFilterValue) {
        return true;
      }
      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.dessertFilterValue.toLowerCase());
    },
    // eslint-disable-next-line consistent-return
    servicesFilter(value) {
      // console.log(value);
      // If this filter has no value we just skip the entire filter.
      if (!this.serviceFilter) {
        return true;
      }
      return value.toLowerCase().includes(this.serviceFilter.toLowerCase());
      // Check if the current loop value (The service name)
      // partially contains the searched word.
      // return value.includes(this.serviceFilter);
    },
    /**
     * Filter for calories column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    caloriesFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.typeFilterValue) {
        return true;
      }
      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value === this.typeFilterValue;
    },
    statusFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.statusFilterValue) {
        return true;
      }
      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value === this.statusFilterValue;
    },
    parentFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.parentFilterValue) {
        return true;
      }
      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value === this.parentFilterValue;
    },
  },
};
</script>

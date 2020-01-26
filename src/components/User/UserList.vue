<template>
  <v-container>
    <v-data-table :headers="headers" :items="desserts" item-key="name"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat class="grey lighten-2">
          <v-toolbar-title>
            لیست کاربران
          </v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-4">
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              class="ml-10"
              dense v-model="dessertFilterValue" type="text" label="نام">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              class="ml-10"
              dense v-model="dessertFilterValue" type="text" label="نام خانوادگی">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              dense class="ml-10"
              v-model="serviceFilter" type="text" label="نام کاربری">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              dense class="ml-10"
              v-model="serviceFilter" type="text" label="جستجو ایمیل">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              dense class="ml-10"
              v-model="serviceFilter" type="text" label="جستجو تلفن">
            </v-text-field>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.calories="{ item }">
          <v-chip small class="pink white--text">
            {{ item.calories }}
          </v-chip>
        </template>
      <template v-slot:no-results>
        هیچ داده ای یافت نشد!
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import tableData from '../../assets/userList.json';

export default {
  name: 'userList',
  data() {
    return {
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
        {
          text: 'نام',
          sortable: false,
          value: 'name',
          filter: this.nameFilter,
        },
        {
          text: 'نام خانوادگی',
          sortable: false,
          value: 'lastName',
          filter: this.nameFilter,
        },
        {
          text: 'نام کاربری',
          sortable: true,
          value: 'userName',
          filter: this.servicesFilter,
        },
        {
          text: 'ایمیل',
          value: 'email',
          sortable: false,
          filter: this.parentFilter,
        },
        {
          text: 'تلفن',
          value: 'mobile',
          filter: this.statusFilter,
        },
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
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

<template>
  <v-container>
    <v-data-table :headers="headers" :items="usersData" item-key="name"
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
              dense v-model="nameFilterVal" type="text" label="نام">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              class="ml-10"
              dense v-model="lnameFilterVal" type="text" label="نام خانوادگی">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              dense class="ml-10"
              v-model="userNameFilterVal" type="text" label="نام کاربری">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              dense class="ml-10"
              v-model="emailFilterFilterVal" type="text" label="جستجو ایمیل">
            </v-text-field>
          </v-col>
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              dense class="ml-10"
              v-model="mobileFilterFilterVal" type="text" label="جستجو تلفن">
            </v-text-field>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.usersData="{ item }">
          <v-chip small class="pink white--text">
            {{ item.usersData }}
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
      mobileFilterFilterVal: '',
      emailFilterFilterVal: '',
      userNameFilterVal: '',
      lnameFilterVal: '',
      nameFilterVal: '',
      // Table data.
      usersData: tableData.data,
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
          sortable: true,
          value: 'lastName',
          filter: this.lastNameFilter,
        },
        {
          text: 'نام کاربری',
          sortable: true,
          value: 'userName',
          filter: this.uNameFilter,
        },
        {
          text: 'ایمیل',
          value: 'email',
          sortable: true,
          filter: this.emailFilter,
        },
        {
          text: 'تلفن',
          value: 'mobile',
          filter: this.mobileFilter,
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
      // If this filter has no value we just skip the entire filter.
      if (!this.nameFilterVal) {
        return true;
      }
      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.nameFilterVal.toLowerCase());
    },
    lastNameFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.lnameFilterVal) {
        return true;
      }
      return value.toLowerCase().includes(this.lnameFilterVal.toLowerCase());
    },
    uNameFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.userNameFilterVal) {
        return true;
      }
      return value.toLowerCase().includes(this.userNameFilterVal.toLowerCase());
    },
    emailFilter(value) {
      if (!this.emailFilterFilterVal) {
        return true;
      }
      return value.toLowerCase().includes(this.emailFilterFilterVal.toLowerCase());
    },
    mobileFilter(value) {
      if (!this.mobileFilterFilterVal) {
        return true;
      }
      return value.toLowerCase().includes(this.mobileFilterFilterVal.toLowerCase());
    },
  },
};
</script>
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

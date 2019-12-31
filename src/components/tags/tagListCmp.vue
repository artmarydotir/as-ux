<template>
  <v-container>
    <v-data-table :headers="headers" :items="desserts" item-key="name"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat class="grey lighten-2">
          <v-toolbar-title>
            لیست برچسب ها
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
      <template v-slot:item.calories="{ item }">
          <v-chip small class="pink white--text">
            {{ item.calories }}
          </v-chip>
        </template>
        <template v-slot:item.action="{ item }">
          <v-icon
            small
            class="blue--text ml-4"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            class="red--text"
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
      </template>
      <template v-slot:no-results>
        هیچ داده ای یافت نشد!
      </template>
    </v-data-table>
  </v-container>
</template>
<style lang="scss" scoped>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}
</style>
<script>
// Table info.

import tableData from '../../assets/sampleList.json';

export default {
  data() {
    return {
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
        {
          text: 'عنوان برچسب',
          sortable: false,
          value: 'name',
          filter: this.nameFilter,
        },
        {
          text: 'عنوان سرویس',
          sortable: true,
          value: 'services',
          filter: this.servicesFilter,
        },
        {
          text: 'نوع ارتباط',
          value: 'parent',
          sortable: false,
          filter: this.parentFilter,
        },
        {
          text: 'وضعیت',
          value: 'status',
          filter: this.statusFilter,
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

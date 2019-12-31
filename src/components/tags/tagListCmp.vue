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
        <v-row class="pa-4">
          <v-col cols="3">
            <!-- Filter for type name-->
            <v-text-field v-model="dessertFilterValue" type="text" label="جستجو عنوان">
            </v-text-field>
          </v-col>
          <v-col cols="3">
            <!-- Filter for type name-->
            <v-text-field dense solo v-model="dessertFilterValue" type="text" label="جستجو سرویس">
            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-select
                :items="isParent"
                v-model="typeFilterValue"
                label="برچسب والد"
            ></v-select>
          </v-col>
          <v-col cols="3">
            <v-select
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
        { text: 'کلمه کلیدی', value: 'keyword' },
        { text: 'نامشخص', value: 'undefind' },
      ],
      // Filter models.
      dessertFilterValue: '',
      typeFilterValue: null,
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
          text: 'نوع ارتباط',
          value: 'parent',
          filter: this.caloriesFilter,
        },
        {
          text: 'وضعیت',
          value: 'status',
          filter: this.caloriesFilter,
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
      console.log('سرچ فیلتر');
      // If this filter has no value we just skip the entire filter.
      if (!this.dessertFilterValue) {
        return true;
      }
      // Check if the current loop value (The dessert name)
      // partially contains the searched word.
      return value.toLowerCase().includes(this.dessertFilterValue.toLowerCase());
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
  },
};
</script>

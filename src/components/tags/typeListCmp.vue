<template>
  <v-container>
    <v-data-table :headers="headers" :items="desserts" item-key="name"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat class="grey lighten-2">
          <v-toolbar-title>
            لیست نوع برچسب
          </v-toolbar-title>
        </v-toolbar>
        <v-row align="center"
          justify="center" >
          <v-col cols="4">
            <!-- Filter for type name-->
            <v-text-field v-model="dessertFilterValue" type="text" label="عنوان">
            </v-text-field>
          </v-col>
          <v-col cols="4">
            <v-select
                :items="typeList"
                v-model="typeFilterValue"
                label="نوع"
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

import tableData from '../../assets/sampleDataTable.json';

export default {
  data() {
    return {
      // We need some values for our select.
      typeList: [
        { text: 'همه', value: null },
        { text: 'منفرد', value: 'single' },
        { text: 'چندگانه', value: 'multiple' },
      ],
      // Filter models.
      dessertFilterValue: '',
      typeFilterValue: null,
      // Table data.
      desserts: tableData.data,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'عنوان نوع',
          sortable: false,
          value: 'name',
          filter: this.nameFilter,
        },
        {
          text: 'نوع تایپ',
          value: 'calories',
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

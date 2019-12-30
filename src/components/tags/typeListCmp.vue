<template>
  <v-container>
    <v-data-table :headers="headers" :items="desserts" item-key="name" class="elevation-1 pa-6">
        <template v-slot:top>
            <!-- v-container, v-col and v-row are just for decoration purposes. -->
          <v-container fluid>
              <v-row>
              <v-col cols="6">
                  <v-row class="pa-6">
                      <!-- Filter for dessert name-->
                      <v-text-field v-model="dessertFilterValue" type="text" label="عنوان">
                      </v-text-field>
                  </v-row>
              </v-col>
              <v-col cols="6">
                  <v-row class="pa-6">
                      <!-- Filter for calories -->
                      <v-select
                          :items="typeList"
                          v-model="typeFilterValue"
                          label="نوع"
                      ></v-select>
                  </v-row>
              </v-col>

              </v-row>
          </v-container>
        </template>
    </v-data-table>
  </v-container>
</template>

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
          text: 'نوع',
          value: 'calories',
          filter: this.caloriesFilter,
        },
        { text: 'Fat (g)', value: 'fat' },
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

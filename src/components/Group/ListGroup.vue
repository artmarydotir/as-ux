<template>
  <v-container>
    <v-data-table :headers="headers" :items="groupes" item-key="name"
      class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat class="grey lighten-2">
          <v-toolbar-title>
            لیست گروه ها
          </v-toolbar-title>
        </v-toolbar>
        <v-row class="pa-4">
          <v-col cols="2">
            <!-- Filter for type name-->
            <v-text-field
              class="ml-10"
              dense v-model="nameFilterValue" type="text" label="عنوان">
            </v-text-field>
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
      <template v-slot:item.groupes="{ item }">
          <v-chip small class="pink white--text">
            {{ item.groupes }}
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

import tableData from '../../assets/groupList.json';

export default {
  data() {
    return {
      // We need some values for our select.
      status: [
        { text: 'همه', value: null },
        { text: 'فعال', value: true },
        { text: 'غیرفعال', value: false },
      ],
      // Filter models.
      nameFilterValue: '',
      serviceFilter: '',
      typeFilterValue: null,
      parentFilterValue: null,
      statusFilterValue: null,
      // Table data.
      groupes: tableData.data,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'عنوان',
          sortable: false,
          value: 'name',
          filter: this.nameFilter,
        },
        {
          text: 'وضعیت',
          sortable: true,
          value: 'active',
          filter: this.statusFilter,
        },
        {
          text: 'نوع ارتباط',
          value: 'parent',
          sortable: false,
          filter: this.parentFilter,
        },
        { text: 'تغییرات', value: 'action', sortable: false },
      ];
    },
  },
  methods: {
    nameFilter(value) {
      if (!this.nameFilterValue) {
        return true;
      }
      return value.toLowerCase().includes(this.nameFilterValue.toLowerCase());
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

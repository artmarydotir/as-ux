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
      <!-- 1 -->
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
                dense type="text" label="جستجو آیدی">
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-select
                  dense
                  :items="status"
                  label="وضعیت"
              ></v-select>
            </v-col>
            <v-col cols="2">
              <!-- Filter for type name-->
              <v-text-field
                class="mr-10"
                dense type="text" label="جستجو کدخبر">
              </v-text-field>
            </v-col>
          </v-row>
        </template>
        <!-- 2 -->
        <template v-slot:top>
          hi:{{ triggerDialog }}
          <EditComment :dialog="triggerDialog" @input="update" :fill="filled" />
        </template>
        <!-- 3 -->
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            {{ item.title }}
          </td>
        </template>
        <!-- 4 -->
        <template v-slot:item.title="{ item }">
          {{ item.title  | str_limit(24) }}
        </template>
        <!-- 5 -->
        <template v-slot:item.action="{ item }">
          <v-icon
            class="blue--text ml-4"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            class="red--text"
          >
            mdi-delete
          </v-icon>
        </template>
        <!-- 6 -->
        <template v-slot:no-results>
          هیچ داده ای یافت نشد!
        </template>
      </v-data-table>
    </v-container>
  </template>
<script>

import tableData from '../../assets/sampleCm.json';
import EditComment from '@/components/Comment/edit.vue';

export default {
  name: 'commentList',
  data() {
    return {
      filled: {
        title: '',
      },
      triggerDialog: false,
      expanded: [],
      selectedCustomerCodes: true,
      // We need some values for our select.
      status: [
        { text: 'همه', value: null },
        { text: 'خوانده شده', value: 1 },
        { text: 'منتشر شده', value: 2 },
        { text: 'منتشر نشده', value: 3 },
      ],
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
        },
        {
          text: 'تغییرات', value: 'action', sortable: false,
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
    editItem(item) {
      console.log(item.title);
      this.filled.title = item.title;
      this.triggerDialog = true;
    },
    update(val) {
      this.triggerDialog = val;
    },
  },
  components: {
    EditComment,
  },
};
</script>

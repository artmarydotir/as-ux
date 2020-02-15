<template>
  <v-container class="mt-4 mb-10">
    <v-card>
      <v-card-title class="indigo white--text">
        لیست سرویس ها
      </v-card-title>
      <v-row justify="center" class="mt-5">
        <v-col cols="12" md="3">
          <v-select
            :items="selectlang"
            label="انتخاب زبان"
            item-text="text"
            item-value="value"
            required
            outlined
            class="mx-auto"
          ></v-select>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="selectshowList"
            item-text="text"
            item-value="value"
            v-model="select"
            select
            return-object
            label="نوع نمایش"
            outlined
            class="mx-auto"
          ></v-select>
        </v-col>
      </v-row>
      <!-- 2 -->
      <v-row class="mb-10" justify="space-between">
        <!-- tree  -->
        <v-col cols="12" md="8" v-if="select.value == 'treeView'">
            <tree :remove="remove"
            :edit="edit" :item="item" @readyToUpdate="updateparentDate"></tree>
        </v-col>
        <!-- table  -->
        <v-col cols="12" v-if="select.value == 'tableView'">
          <serviceTableList />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import serviceTableList from '@/components/Service/serviceListTable.vue';
import tree from '@/components/globalCmp/tree.vue';


export default {
  name: 'serviceForm',
  methods: {
    updateparentDate(newDate) {
      this.item = newDate;
      // console.log('parent', this.date);
    },
  },
  data() {
    return {
      select: { text: 'نمایش جدولی', value: 'treeView' },
      item: [
        {
          id: 1,
          name: 'سرویس ها',
          isleaf: false,
          children: [],
        },
      ],
      rememberMe: true,
      edit: '/service/add',
      remove: true,
      selectlang: [
        {
          text: 'فارسی',
          value: 'fa',
        },
        {
          text: 'انگلیسی',
          value: 'en',
        },
      ],
      selectshowList: [
        {
          text: 'نمایش درختی',
          value: 'treeView',
        },
        {
          text: 'نمایش جدولی',
          value: 'tableView',
        },
      ],
    };
  },
  components: {
    tree,
    serviceTableList,
  },
};
</script>

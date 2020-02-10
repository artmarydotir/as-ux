<template>
  <v-container>
    <v-card>
      <v-card-title class="indigo white--text">
        لیست سرویس ها
      </v-card-title>
      <v-row justify="center">
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
      </v-row>
      <!-- 2 -->
      <v-row class="pa-4" justify="space-between">
        <v-col cols="12" md="8">
            <tree :remove="remove"
            :edit="edit" :item="item" @readyToUpdate="updateparentDate"></tree>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
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
    };
  },
  components: {
    tree,
  },
};
</script>

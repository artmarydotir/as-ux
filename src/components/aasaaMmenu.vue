<template>
  <v-list shaped>
    <!-- 1 -->
    <v-list-item link to="/">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title> خانه </v-list-item-title>
    </v-list-item>
    <!-- 2 -->
    <v-list-item link>
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>داشبورد</v-list-item-title>
    </v-list-item>
    <!-- 3 -->
    <v-list-group
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item v-for="subItem in item.items" :key="subItem.title" :to="subItem.link">
        <v-list-item-content>
          <v-list-item-title v-text="subItem.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: 'mdi-file-move',
          title: 'برچسب ها',
          active: true,
          items: [
            {
              title: 'افزودن برچسب',
              link: '/addTag',
            },
            {
              title: 'لیست برچسب ها',
              link: '/listTag',
            },
            {
              title: 'افزودن نوع برچسب',
              link: '/typeTag',
            },
            {
              title: 'لیست انواع',
              link: '/typeList',
            },
          ],
        },
      ],
    };
  },
};
</script>

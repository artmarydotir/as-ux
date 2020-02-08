<template>
  <div>
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

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.link"
          class="my-2"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
  </div>
</template>

<script>
export default {
  name: 'serviceManagment',
  data() {
    return {
      items: [
        {
          action: 'mdi-toolbox-outline',
          title: 'مدیریت سرویس',
          active: true,
          items: [
            {
              title: 'افزودن سرویس',
              link: '/service/add',
            },
            {
              title: 'لیست سرویس',
              link: '/serviceList',
            },
          ],
        },
      ],
    };
  },
};
</script>

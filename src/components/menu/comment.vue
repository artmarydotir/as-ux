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
  name: 'commentManagement',
  data() {
    return {
      items: [
        {
          action: 'mdi-comment',
          title: 'مدیریت دیدگاه',
          active: true,
          items: [
            {
              title: 'داشبورد دیدگاه',
              link: '/comment/dashboard',
            },
            {
              title: 'لیست دیدگاه',
              link: '/comment/list',
            },
          ],
        },
      ],
    };
  },
};
</script>

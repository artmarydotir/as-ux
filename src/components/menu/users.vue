<template>
  <v-list-group
      prepend-icon="mdi-account-supervisor"
      value="true"
    >
      <template v-slot:activator>
        <v-list-item-title class="my-2">
          مدیریت اعضا
        </v-list-item-title>
      </template>
      <!-- 1 -->
      <v-list-group
        no-action
        sub-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              کاربران
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          class="my-2"
          v-for="(user, i) in users"
          :key="i"
          :to="user.link"
        >
          <v-list-item-title v-text="user.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list-group>
</template>

<script>
export default {
  name: 'userManagement',
  data() {
    return {
      users: [
        {
          title: 'افزودن کاربر',
          link: '/user/add',
        },
        {
          title: 'لیست کاربران',
          link: '/user/list',
        },
      ],
    };
  },
};
</script>

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
      <!-- 2 group -->
      <v-list-group
        no-action
        sub-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              گروه ها
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          class="my-2"
          v-for="(group, i) in groups"
          :key="i"
          :to="group.link"
        >
          <v-list-item-title v-text="group.title"></v-list-item-title>
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
          title: 'لیست کاربران',
          link: '/user/list',
        },
      ],
      groups: [
        {
          title: 'افزودن گروه',
          link: '/group/add',
        },
        {
          title: 'لیست گروه',
          link: '/group/list',
        },
      ],
    };
  },
};
</script>

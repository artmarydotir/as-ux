<template>
  <v-list shaped dense>
    <!-- 1 -->
    <v-list-item link to="/">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title> خانه </v-list-item-title>
    </v-list-item>
    <!-- 2 -->
    <v-list-item link to="/dashboard/">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>داشبورد</v-list-item-title>
    </v-list-item>
    <!-- 3 -->
    <userManage />
    <!-- 4 -->
    <serviceManage />
    <!-- 5 -->
    <commentManage />
    <!-- 6 -->
    <v-list-group
        prepend-icon="mdi-file-move"
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title class="my-2">
            برچسب ها
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
                کلمات کلیدی
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            class="my-2"
            v-for="(admin, i) in admins"
            :key="i"
            :to="admin.link"
          >
            <v-list-item-title v-text="admin.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- 2 -->
        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="my-2">
                بیمارستان
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            class="my-2"
            v-for="(hospital, i) in hospitals"
            :key="i"
            :to="hospital.link"
          >
            <v-list-item-title v-text="hospital.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- 3 -->
        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="my-2 red--text">
                انواع برچسب
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            class="my-2"
            v-for="(type, i) in types"
            :key="i"
            :to="type.link"
          >
            <v-list-item-title v-text="type.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list-group>
  </v-list>
</template>

<script>
import userManage from '@/components/menu/users.vue';
import serviceManage from '@/components/menu/service.vue';
import commentManage from '@/components/menu/comment.vue';

export default {
  data() {
    return {
      admins: [
        {
          title: 'افزودن برچسب',
          link: '/addTag',
        },
        {
          title: 'لیست برچسب ها',
          link: '/listTag',
        },
      ],
      types: [
        {
          title: 'افزودن نوع برچسب',
          link: '/typeTag',
        },
        {
          title: 'لیست انواع',
          link: '/typeList',
        },
      ],
      hospitals: [
        {
          title: 'افزودن بیمارستان',
          link: '/addTag',
        },
        {
          title: 'لیست بیمارستان ها',
          link: '/listTag',
        },
      ],
    };
  },
  components: {
    userManage,
    serviceManage,
    commentManage,
  },
};
</script>

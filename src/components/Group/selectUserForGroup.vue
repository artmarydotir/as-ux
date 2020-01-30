<template>
  <v-container>
    <v-card>
        <v-card-title>
          افزودن کاربر به گروه
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="جستجوی کاربر"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
        >
          <template v-slot:item.status="{ item }">
            <v-chip small :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
          </template>
          <template v-slot:item.action="{ item }">
              <v-icon class="mr-2" @click="addUser(item)">
                mdi-account-plus-outline
              </v-icon>
          </template>
        </v-data-table>
      </v-card>
  </v-container>
</template>
<style lang="scss" scoped>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}
</style>
<script>
import tableData from '../../assets/userList.json';

export default {
  data() {
    return {
      search: '',
      // Table data.
      users: tableData.data,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'نام کاربری',
          sortable: true,
          value: 'userName',
          filter: this.uNameFilter,
        },
        {
          text: 'ایمیل',
          value: 'email',
          sortable: true,
          filter: this.emailFilter,
        },
        {
          text: 'وضعیت',
          sortable: true,
          value: 'status',
          filter: this.statusFilter,
        },
        { text: 'تغییرات', value: 'action' },
      ];
    },
  },
  methods: {
    getColor(status) {
      if (status === false) return 'red';
      return 'green';
    },
    addUser(item) {
      return item;
    },
  },
};
</script>
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

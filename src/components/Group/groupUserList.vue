<template>
  <v-data-table
    :headers="headers"
    :items="groupes"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>لیست کاربران گروه</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="900px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">کاربر جدید</v-btn>
          </template>
          <selectUserForGroup />
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>
<style lang="scss" scoped>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}
</style>
<script>
import tableData from '../../assets/userList.json';
import selectUserForGroup from '@/components/Group/selectUserForGroup.vue';

export default {
  data() {
    return {
      // We need some values for our select.
      status: [
        { text: 'همه', value: null },
        { text: 'فعال', value: true },
        { text: 'غیرفعال', value: false },
      ],
      // Filter models.
      nameFilterValue: '',
      dialog: false,
      userCount: '',
      statusFilterValue: null,
      // Table data.
      groupes: tableData.data,
      groupId: 1,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'نام',
          sortable: false,
          value: 'name',
          filter: this.nameFilter,
        },
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
        { text: 'گزینه ها', value: 'action', sortable: false },
      ];
    },
  },
  methods: {
    editStudent(id) {
      this.id = id;
    },
    updateTable(groupId) {
      console.log(groupId);
    },
    sss() {
      // eslint-disable-next-line no-unused-vars
      const reformattedArray = this.groupes.map((obj) => {
        const rObj = {};
        rObj[obj.key] = obj.value;

        return rObj;
      });
      console.log(reformattedArray);
    },
  },
  components: {
    selectUserForGroup,
  },
};
</script>
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

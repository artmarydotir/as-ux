<template>
  <v-container>
    <v-col cols="3">
      <v-select
          dense
          :items="groupes"
          item-text="name"
          item-value="id"
          label="نام گروه"
          v-model="groupId"
      ></v-select>
    </v-col>
    <v-data-table :headers="headers" :items="groupes" item-key="name"
      class="elevation-1">
        <template v-slot:top >
          <v-toolbar flat class="grey lighten-2">
            <v-toolbar-title>
              ‍لیست کاربران گروه
            </v-toolbar-title>
          </v-toolbar>
          <globalDialog :dialog.sync="dialog" :uniqueId="groupId" />
        </template>
        <template v-slot:body="{ items }" >
            <tbody v-for="item in items" :key="item.name">
              <tr v-for="i in item.users" :key="i.name"  >
                <span v-if=" item.id == groupId" >
                  <td>{{ i.id }}</td>
                  <td>{{ i.name }}</td>
                  <td>{{ i.userName }}</td>
                  <td>{{  }}</td>
                </span>
              </tr>
            </tbody>
<!-- v-if=" item.id == groupId"  -->
        </template>
      <template v-slot:no-results>
        هیچ داده ای یافت نشد!
      </template>
      <template v-slot:no-data>
        هیچ داده ای یافت نشد!
      </template>
    </v-data-table>
  </v-container>
</template>
<style lang="scss" scoped>
tbody tr:nth-of-type(even) {
  background-color: rgba(236, 237, 237);
}
</style>
<script>
import tableData from '../../assets/groupList.json';
import globalDialog from '@/components/globalCmp/globalDialog.vue';

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
        { text: 'تغییرات', value: 'action', sortable: false },
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
    globalDialog,
  },
};
</script>
<style lang="scss" >
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .03) !important;
  }
</style>

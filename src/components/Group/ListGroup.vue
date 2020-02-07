<template>
  <v-container>
    <v-data-table :headers="headers" :items="groupes" item-key="name"
      class="elevation-1">
        <template v-slot:top >
          <v-toolbar flat class="grey lighten-2">
            <v-toolbar-title>
              لیست گروه ها
            </v-toolbar-title>
          </v-toolbar>
          <v-row class="pa-4">
            <v-col cols="2">
              <!-- Filter for type name-->
              <v-text-field
                class="ml-10"
                dense v-model="nameFilterValue" type="text" label="عنوان">
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-select
                  dense
                  :items="status"
                  v-model="statusFilterValue"
                  label="وضعیت"
              ></v-select>
            </v-col>
          </v-row>
          <globalDialog :dialog.sync="dialog" :uniqueId="id" />
        </template>
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.userCount }} </td>
              <td>{{ item.active }} </td>
              <td>
                <v-btn
                  icon color="pink"
                  @click="dialog=true, editStudent(item.id)"
                  @remover="id"
                >
                  {{ item.id }}
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
        <!-- <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.active }}</td>
          <td>{{ props.item.userCount }}</td>
          <td>
          <v-btn
                icon color="pink"
                @click.stop="showDialog = true"
                @remover="item.id = $event"
              >
                <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn fab dark
                  color="primary">
              <v-icon dark>edit</v-icon>
            </v-btn>
          </td>
        </template> -->
        <!-- <template v-slot:item.action="{ item }">
          <v-icon
            small
            class="blue--text ml-4"
          >
            mdi-pencil
          </v-icon>
          <v-btn
            icon color="pink"
            @click.stop="showDialog = true"
            @remover="item.id"
          >
          {{ item.id }}
            <v-icon>mdi-delete</v-icon>
          </v-btn>
      </template> -->
      <template v-slot:no-results>
        هیچ داده ای یافت نشد!
      </template>
      <template v-slot:no-data>
        هیچ داده ای یافت نشد!
      </template>
    </v-data-table>
    <div class="my-8">
      <v-alert
        outlined
        type="error"
        text
      >
        باتوجه به تجربه ی کار با سایت های مختلف قرار بر این شده است که:
        چند گروه دیفالت از ابتدا ساخته شود.
        مانند گروه تبلیغات و یا
        گروه کاربران با دسترسی روزنامه و ...
      </v-alert>
    </div>
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
      id: 1,
    };
  },
  computed: {
    headers() {
      return [
        {
          text: 'عنوان',
          sortable: false,
          value: 'name',
          filter: this.nameFilter,
        },
        {
          text: 'وضعیت',
          sortable: true,
          value: 'active',
          filter: this.statusFilter,
        },
        {
          text: 'تعداد کاربران موجود',
          value: 'userCount',
          sortable: false,
          filter: this.parentFilter,
        },
        { text: 'تغییرات', value: 'action', sortable: false },
      ];
    },
  },
  methods: {
    editStudent(id) {
      this.id = id;
    },
    nameFilter(value) {
      if (!this.nameFilterValue) {
        return true;
      }
      return value.toLowerCase().includes(this.nameFilterValue.toLowerCase());
    },
    statusFilter(value) {
      if (!this.statusFilterValue) {
        return true;
      }
      return value === this.statusFilterValue;
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

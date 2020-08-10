<template>
  <v-dialog
    persistent
    v-model="dialog"
    max-width="600"
  >
    <v-card :loading="loading">
      <v-card-title
        class="headline grey lighten-2"
        primary-title>
        حذف گروه
      </v-card-title>
      <v-card-text class="py-4">
        آیا برای حذف کردن این گروه مطمعن هستید؟

        {{ this.uniqueId }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="deleteGroup"
        >
          بله
        </v-btn>

        <v-btn
          color="warning"
          text
          @click.native="close"
        >
          لغو
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import tableData from '../../assets/groupList.json';

export default {
  name: 'deleteGroup',
  data() {
    return {
      groupes: tableData.data,
      loading: false,
    };
  },
  props: {
    dialog: {
      default: false,
    },
    uniqueId: Number,
  },
  // computed: {
  //   showDialog: {
  //     get() {
  //       return this.value;
  //     },
  //     set(value) {
  //       this.$emit('input', value);
  //     },
  //   },
  // },
  methods: {
    close() {
      this.$emit('update:dialog', false);
      this.loading = false;
    },
    deleteGroup() {
      const index = this.groupes.indexOf(this.uniqueId);
      this.groupes.splice(index, 1);
      // console.log(this.uniqueId);

      this.loading = true;
      setTimeout(() => {
        this.close();
      }, 2000);
      // this.$emit('remover', this.uniqueId);
    },
  },

  created() {
    // console.log('user data from parent component:');
    // console.log(this.uniqueId);
  },
};
</script>

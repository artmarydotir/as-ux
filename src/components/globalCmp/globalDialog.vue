<template>
  <v-dialog
    v-model="showDialog"
    max-width="600"
  >
    <v-card>
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
          @click="dialog = false"
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
  name: 'dialog',
  data() {
    return {
      groupes: tableData.data,
    };
  },
  props: {
    value: Boolean,
    uniqueId: Number,
  },
  computed: {
    showDialog: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    deleteGroup() {
      const index = this.groupes.indexOf(this.uniqueId);
      this.groupes.splice(index, 1);
      console.log(this.uniqueId);
      // this.$emit('remover', this.uniqueId);
    },
  },

  created() {
    console.log('user data from parent component:');
    console.log(this.uniqueId);
  },
};
</script>

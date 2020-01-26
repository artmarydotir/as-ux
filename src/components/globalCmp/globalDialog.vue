<template>
  <v-dialog
    v-model="showDialog"
    max-width="600"
  >
    <v-card>
      <v-card-title
        class="headline grey lighten-2"
        primary-title>
        ssssssssssssss
      </v-card-title>

      <v-card-text>
        Let Google help apps determine location.
        This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
        >
          Disagree
        </v-btn>

        <!-- <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Agree
        </v-btn> -->
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>

export default {
  name: 'dialog',
  props: {
    value: Boolean,
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
};
</script>

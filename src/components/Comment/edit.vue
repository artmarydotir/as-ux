<template>
  <v-dialog :value="dialog" @input="$emit('input', $event)" max-width="700px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>
      <!-- {{ dialog }} -->
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-textarea
                filled
                v-model="fill.title"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="6">
              <v-checkbox
                label="منتشر کن"
              ></v-checkbox>
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox
                label="خواندم"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" dark>ذخیره</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: 'EditComment',
  data() {
    return {
      formTitle: 'ویرایش دیدگاه',
    };
  },
  props: {
    dialog: {
      default: false,
      type: Boolean,
      required: true,
    },
    fill: {
      type: Object,
      required: false,
    },
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

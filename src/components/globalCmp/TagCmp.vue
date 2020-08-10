<template>
  <div>
    <!-- {{ val }} -->
      <v-autocomplete
        :value="val"
        :items="items"
        outlined
        chips
        small-chips
        @input="$emit('tagchanged', $event)"
        label="افزودن برچسب"
        multiple
      ></v-autocomplete>
  </div>
</template>
<script>
export default {
  name: 'tagCmp',
  props: {
    val: {
      type: Array,
    },
  },
  data() {
    return {
      items: ['سلام', 'درود'],
    };
  },
};
</script>

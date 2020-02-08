<template>
  <v-row >
    <v-col cols="12" md="4">
      <tree></tree>
    </v-col>
  </v-row>

</template>
<script>
import tree from '@/components/globalCmp/tree.vue';

export default {
  name: 'serviceForm',
  components: {
    tree,
  },
};
</script>

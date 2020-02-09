<template>
  <v-container>
    <v-row>
    <v-col cols="12" md="4">
      <v-card height="400px">
        <v-card-title class="blue">
          لیست سرویس ها
        </v-card-title>
        <tree></tree>
      </v-card>
    </v-col>
    <v-col>
      r
    </v-col>
  </v-row>

  </v-container>
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

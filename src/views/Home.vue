<template>
  <div class="ma-6">
    <v-alert type="success">
      این پروژه صرفا برای داکیومنت کردن تحلیل ها و اسکچ های
      ux آســـام میباشد.
    </v-alert>
    <div class="my-12">
      <v-btn color="primary" @click="setLayout('custom-layout')">Simple Layout</v-btn>
      <userSnapshot />
    </div>
  </div>
</template>

<script>
import userSnapshot from '@/components/User/userSnapshot.vue';

export default {
  name: 'home',
  components: {
    userSnapshot,
  },
  methods: {
    setLayout(layout) {
      this.$store.commit('SET_LAYOUT', layout);
    },
  },
};
</script>

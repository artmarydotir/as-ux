<template>
  <div class="ma-6">
    <div class="my-12">
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
};
</script>

<template>
  <div>
    <p class="subheading mx-auto text-center justify-center">
      Hi there
    </p>
    <commentList />
  </div>
</template>
<script>
import commentList from '@/components/Comment/list.vue';

export default {
  // name: 'commentList',
  components: {
    commentList,
  },
};
</script>

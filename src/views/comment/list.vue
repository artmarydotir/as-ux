<template>
  <div>
    <commentList />
  </div>
</template>
<script>
// @ is an alias to /src
import commentList from '@/components/Comment/list.vue';

export default {
  // name: 'commentList',
  components: {
    commentList,
  },
};
</script>

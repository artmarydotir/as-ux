<template>
  <div>
    <commentList />
    <v-alert dir="ltr" type="warning" class="ma-12">
      <p>
        <code>
          { text: 'خوانده شده', value: 1 }
        </code>
        <code class="ml-4">
          { text: 'منتشر شده', value: 2 }
        </code>
        <code class="ml-4">
          { text: 'منتشر نشده', value: 3 }
        </code>
      </p>
    </v-alert>
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

<template>
  <v-container>
      <v-alert type="success" class="ma-10">
        <span class="fo">
          این پروژه صرفا برای داکیومنت کردن تحلیل ها و اسکچ های
          ux آســـام میباشد.
        </span>
      </v-alert>
      <v-alert type="error" class="ma-10 fo">
        رنگ ها و  گرافیک در این پروژه همگی تستی هستند.
        لطفا از هرگونه کامنت گذاشتن بر روی رنگ و گرافیک خودداری نمایید.
      </v-alert>
  </v-container>
</template>
<script>
export default {
  name: 'dashboard',
};
</script>
<style lang="scss" scoped>
.fo {
  font-size: 20px !important;
}
</style>

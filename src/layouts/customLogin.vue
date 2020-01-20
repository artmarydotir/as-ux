<template>
  <div class="body_bg">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.body_bg {
  background-image: url(../assets/1.png), url(../assets/2.png);
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
}

</style>

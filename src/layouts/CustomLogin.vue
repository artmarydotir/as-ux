<template>
  <div class="body_bg body_bg1">
    <!-- <router-view></router-view> -->
    <slot />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.body_bg {
  background-image: url(../assets/33.png), url(../assets/32.png);
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom right;
  background-attachment: fixed , fixed;
}
// .body_bg1 {
//   background-image: url(../assets/33.png);
//   background-repeat: no-repeat;
//   background-position: top left;
//   background-attachment: fixed;
// }
// .body_bg {
//   background-image: url(../assets/32.png);
//   background-repeat: no-repeat;
//   background-position: bottom right;
//   background-attachment: fixed;
// }

</style>

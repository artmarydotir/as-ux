<template>
  <v-app class="bg">
    <!-- <router-view></router-view> -->
    <slot />
  </v-app>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.theme--light.v-application {
  background-image: url(../assets/n1.png), url(../assets/n2.png);
  background-repeat: no-repeat, no-repeat;
  background-position: top left, bottom  right;
  background-attachment: fixed , fixed;
}
.bg {
  background-color: #f2f4ff;
}

</style>

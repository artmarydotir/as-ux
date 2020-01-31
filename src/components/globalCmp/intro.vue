<template>
  <v-card
    class="mx-auto"
    max-width="400"
    flat
    color="transparent"
  >
    <v-card-title class="text-center justify-center py-6">
      <v-img class="block"
        width="120" contain height="120"
        src="../../assets/logo.png">
      </v-img>
    </v-card-title>
    <v-card-subtitle class="text-center justify-center py-2">
      <p v-if="title" class="display-1 blue--text block justify-center py-5">
        {{ title }}
      </p>
      <span>
        تیم فنی آسام با کادری مجرب و حرفه ای همواره پشتیبان شما خواهد بود
      </span>
    </v-card-subtitle>
      <v-img class="block mx-auto mt-12"
        width="300"
        contain
        height="300"
        src="../../assets/interface.jpg">
      </v-img>
  </v-card>
</template>
<script>

export default {
  name: 'intro',
  props: {
    title: {
      default: 'به آسام خوش آمدید',
      type: String,
    },
  },
};
</script>

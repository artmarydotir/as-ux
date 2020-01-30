<template>
  <v-card
    class="mx-auto"
    max-width="400"
    flat
    color="transparent"
    min-height="398"
  >
    <v-card-title class="text-center justify-center py-6">
      <v-img class="block"
        width="200" contain height="200"
        src="../../assets/index.svg.png">
      </v-img>
      <p v-if="title" class="block justify-center py-5 white--text">
        {{ title }}
      </p>
    </v-card-title>
    <v-card-subtitle class="text-center justify-center py-2">
      تیم فنی آسام با کادری مجرب و حرفه ای همواره پشتیبان شما خواهد بود
    </v-card-subtitle>
      <v-img class="block mx-auto"
        width="300" contain height="300"
        src="../../assets/backgroud.png">
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

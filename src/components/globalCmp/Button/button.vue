<template>
  <v-btn @click="onClick" :color="color" :class="className">
      <slot></slot>
      <v-icon v-if="iconName">
        {{iconName}}
      </v-icon>

  </v-btn>
</template>
<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
    },
    className: {
      type: String,
      required: false,
    },
    iconName: {
      type: String,
      required: false,
      // default: 'mdi-heart',
    },
  },
};
</script>

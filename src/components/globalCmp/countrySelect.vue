<template>
  <v-select
    v-model="countryDefault"
    :items="items"
    outlined
    item-text="nativeName"
    item-value="alpha2Code"
    autocomplete
    return-object
    label="انتخاب کشور"
  >
    <template slot='item' slot-scope='{ item }'>
      <span dir="ltr" class="pl-2">{{ item.emoji }} </span>{{ item.nativeName }} ({{ item.name }})
    </template>
  </v-select>
</template>
<script>
import country from '@/utils/country';

// console.log(country);
export default {
  name: 'countryList',
  data() {
    return {
      countryDefault: {
        code: 'IR',
        emoji: '🇮🇷',
        name: 'Iran (Islamic Republic of)',
        nativeName: 'ایران',
        alpha2Code: 'IR',
      },
      items: country,
    };
  },
};
</script>

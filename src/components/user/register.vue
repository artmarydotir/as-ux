<template>
  <v-card flat color="grey lighten-4">
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="نام کاربری"
              name="userName"
              v-model="userName"
              type="text"
              dir="ltr"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="ایمیل"
              name="email"
              v-model="userEmail"
              type="text"
              dir="ltr"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="رمز عبور "
              v-model="userPass"
              :append-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="تکرار رمز عبور"
              v-model="userPass"
            />
          </v-col>
          <v-col cols="12" md="6">
            <!-- <v-select
              :items="items"
              item-text="nativeName"
              item-value="alpha2Code"
              autocomplete
              return-object
              label="انتخاب کشور"
            >
              <template slot='item' slot-scope='{ item }'>
                {{ item.emoji }} {{ item.nativeName }} ({{ item.name }})
              </template>
            </v-select> -->
            <countryList class="country_locale" />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import countryList from '@/components/globalCmp/countrySelect.vue';

export default {
  name: 'register',
  components: {
    countryList,
  },
  data() {
    return {
      userName: '',
      userEmail: '',
      userPass: '',
      show1: false,
      items: [
        {
          nativeName: 'افغانستان',
          alpha2Code: 'AF',
          name: 'Afghanistan',
          dialCode: '+93',
          emoji: '🇦🇫',
        },
        {
          nativeName: 'ایران',
          alpha2Code: 'IR',
          name: 'Afghanistan',
          dialCode: '+93',
          emoji: '🇮🇷',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
  .country_locale .v-listt {
    direction: ltr;
  }
</style>

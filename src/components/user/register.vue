<template>
  <v-card flat color="grey lighten-4">
    <v-card-text>
      <v-form>
        <v-text-field
          label="Login"
          name="login"
          prepend-icon="person"
          type="text"
        />
        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          type="password"
        />
        <v-row>
          <v-col cols="12" md="7">
            1
          </v-col>
          <v-col cols="12" md="5">
            2
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

export default {
  name: 'register',
  data() {
    return {
      tab: null,
      tabTitle: [
        'ورود', 'ثبت نام',
      ],
    };
  },
};
</script>

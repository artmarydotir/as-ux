<template>
<v-container>
  <v-row color="grey lighten-2">
    <v-col cols="12" md="5" >
        <v-card color="white">
          <v-card-title class="blue white--text">
            افزودن گروه
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    label="عنوان"
                    name="groupName"
                    v-model="groupName"
                    type="text"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox
                    v-model="active" label="فعال">
                  </v-checkbox>
                </v-col>
                <v-row class="pr-2">
                  <v-col cols="6">
                    <v-text-field
                      label="انتخاب رنگ"
                      name="groupName"
                      v-model="pickColor"
                      type="text"
                      outlined
                    />
                  </v-col>
                  <v-col cols="6" dir="ltr">
                    <v-color-picker
                      class="ml-5"
                      v-model="pickColor"
                      hide-canvas
                    >
                    </v-color-picker>
                  </v-col>
                </v-row>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions class="mx-auto text-center justify-center">
            <v-spacer></v-spacer>
            <v-btn color="pink white--text" class="ma-3">
                ذخیره
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-col>
    <v-col cols="12" md="7">
      <groupUserList />
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import groupUserList from '@/components/Group/groupUserList.vue';

export default {
  name: 'addGroup',
  data() {
    return {
      groupName: '',
      active: false,
      pickColor: '',
      mobileNumber: '',
      show1: false,
    };
  },
  components: {
    groupUserList,
  },
};
</script>
<style lang="scss" scoped>
</style>

<template>
<v-container class="ma-8">
  <v-card class="pa-4 red lighten-5">
    <v-card-title>
      لیست برچسب ها
    </v-card-title>
    <v-row>
      <v-col cols="12" md="2">
        <v-select
          :items="langSupp"
          solo
          flat
          v-model="langDe"
          label="بر اساس حروف الفبایی"
          dense
        ></v-select>
      </v-col>
      <v-col cols="12" md="10">
        <v-list v-if="langDe == 'fa'">
          <v-list-item-group color="primary" class="d-flex flex-row mb-4">
            <v-list-item
              v-for="(item, i) in itemsFa"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-list v-if="langDe == 'en'">
          <v-list-item-group color="primary" class="d-flex flex-row mb-4">
            <v-list-item
              v-for="(item, i) in itemsEn"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
        <v-card-title>
          فیلتر بر اساس :
        </v-card-title>
    <v-row>
      <v-col cols="12" md="2">
          <v-text-field
            v-model="tagTitle"
            flat
            label="عنوان"
            required
            solo
          ></v-text-field>
      </v-col>
      <v-col md="2">
          <v-switch v-model="parent" label=" برچسب والد">
          </v-switch>
      </v-col>
      <v-col
          cols="12"
          md="1"
        >
          <v-select
            flat
            v-model="select"
            :items="tagStatus"
            label="وضعیت"
            required
            solo
          ></v-select>
        </v-col>
        <!-- 1 -->
        <v-col
            cols="12"
            md="2"
          >
          <v-autocomplete
              :items="service"
              dense
              chips
              flat
              small-chips
              label=" سرویس"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
          <v-autocomplete
              :items="service"
              dense
              flat
              chips
              small-chips
              label=" مولف"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
          <v-autocomplete
              :items="compony"
              dense
              flat
              chips
              small-chips
              label=" کمپانی"
              multiple
              solo
            ></v-autocomplete>
          </v-col>
    </v-row>
    <!-- tags  -->
    <v-row justify="space-around">
    <v-col cols="12" md="8" lg="12">
      <v-sheet class="pa-6">
        <v-chip-group
          column
          active-class="primary--text"
        >
          <v-chip v-for="tag in tags" :key="tag">
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
  </v-card>
  <div class="text-center my-11">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
</v-container>
</template>
<script>
export default {
  name: 'tagListCmp',
  data() {
    return {
      page: 1,
      tags: [
        'Work',
        'Hoffe Improvement',
        'Home Improvement',
        'Vacation',
        'Foofd',
        'Foodas',
        'Drawersa',
        'Food',
        'Drafweaars',
        'Shofpping',
        'Artlk',
        'Vafcation',
        'Fofodo',
        'Fofojd',
        'Drawers',
        'Fooaafd',
        'Drawersfgh',
        'Shodpping',
        'Artqw',
        'Tefch',
        'Fofodjk',
        'Fofodaa',
        'Drawaaers',
        'Foodaa',
        'Drdawers',
        'Shopping',
        'Aaart',
        'Tdech',
        'Tecdh',
        'Creative Writing',
      ],
      tagTitle: '',
      select: '',
      parent: false,
      tagStatus: [
        'نامشخص',
        'کلمه کلیدی',
      ],
      langSupp: [
        'fa',
        'en',
      ],
      langDe: ['fa'],
      itemsFa: [
        { text: 'ا' },
        { text: 'ب' },
        { text: 'ث' },
        { text: 'د' },
        { text: 'ذ' },
        { text: 'ر' },
        { text: 'ح' },
        { text: 'ق' },
        { text: 'ل' },
        { text: 'م' },
        { text: 'ن' },
        { text: 'و' },
      ],
      itemsEn: [
        { text: 'a' },
        { text: 'b' },
        { text: 'c' },
        { text: 'd' },
        { text: 'e' },
        { text: 'f' },
        { text: 'g' },
        { text: 'h' },
        { text: 'i' },
        { text: 'j' },
        { text: 'k' },
        { text: 'l' },
      ],
      service: [
        'سیاسی',
        'اقتصادی',
        'فرهنگی',
      ],
      compony: [
        'ایده',
        'بیمه اسیا',
        'بیمه ایران',
      ],
      childtag: [
        'خوشحال',
        'شادی',
        'شعف',
      ],
    };
  },
};
</script>

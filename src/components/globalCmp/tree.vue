<template>
  <div>
      <v-treeview
      :items="items"
      :activatable="activatable"
      :open-on-click="openOnClick"
      :selected-color="selectedColor"
      :color="color"
      return-object
      >
        <template slot="label" slot-scope="{ item }">
          {{ item }}
  {{ item.leaf }}
        </template>
        <template slot="append" slot-scope="{ item }">
          <v-btn small class="ml-3" color="success" dark @click="addChild(item);">افزودن</v-btn>
          <v-btn small color="error"  @click="removeChild(item);">حذف</v-btn>
          <v-btn small color="secondary"  @click="editChild(item);">ویرایش</v-btn>
        </template>
      </v-treeview>
  </div>
</template>
<script>

export default {
  name: 'tree',
  data() {
    return {
      nextId: 1000,
      activatable: true,
      openOnClick: false,
      selectedColor: 'accent',
      color: 'primary',
      childName: 'عنوان',
      items: [
        {
          id: 1,
          name: 'سرویس ها',
          children: [
            {
              id: 2,
              name: this.childName,
              // children: [
              //   {
              //     id: 6,
              //     name: 'vuetify :',
              //     children: [
              //       {
              //         id: 7,
              //         name: 'src :',
              //         children: [
              //           { id: 8, name: 'index : ts' },
              //           { id: 9, name: 'bootstrap : ts' },
              //         ],
              //       },
              //     ],
              //   },
              // ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    addChild(item) {
      if (!item.children) {
        this.$set(item, 'children', []);
      }

      // const name = `${item.name} (${item.children.length})`;
      const name = this.childName;
      // eslint-disable-next-line no-plusplus
      const id = this.nextId++;
      item.children.push({
        id,
        name,
      });
    },
    editChild(item) {
      const name = this.childName;
      // eslint-disable-next-line no-plusplus
      item.children.push({
        name,
      });
    },
  },
};
</script>

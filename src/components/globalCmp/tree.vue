<template>
  <div>
      <v-treeview
      :items="items"
      :activatable="activatable"
      :selected-color="selectedColor"
      open-all
      :color="color"
      return-object
      >
        <!-- <template slot="label" slot-scope="{ item }">
          {{ item }}
        </template> -->
        <template slot="append" slot-scope="{ item }" v-if="item.isleaf">
            <!-- add  -->
            <v-btn @click="addChild(item);" text icon class="ml-3" color="success">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            <!-- remove  -->
            <v-btn @click="removeChild(item);" text icon class="ml-3" color="error">
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <!-- edit  -->
            <v-btn @click="editChild(item);" text icon class="ml-3" color="secondary">
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
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
      openOnClick: true,
      selectedColor: 'accent',
      color: 'primary',
      childName: 'عنوان',
      items: [
        {
          id: 1,
          name: 'سرویس ها',
          isleaf: false,
          children: [
            {
              id: 2,
              name: 'اخبار',
              isleaf: true,
              children: [
                {
                  id: 3,
                  name: 'سیاسی',
                  isleaf: true,
                  // children: [
                  //   {
                  //     id: 7,
                  //     name: 'src :',
                  //     children: [
                  //       { id: 8, name: 'index : ts' },
                  //       { id: 9, name: 'bootstrap : ts' },
                  //     ],
                  //   },
                  // ],
                },
              ],
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
        isleaf: true,
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

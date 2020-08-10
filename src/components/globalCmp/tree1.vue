<template>
  <div>
    <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
      <v-treeview
        :items="items"
        :activatable="activatable"
        :selected-color="selectedColor"
        :active.sync="active"
        open-all
        :color="color"
        return-object
        hoverable
        selection-type="independent"
      >
        <template slot="append" slot-scope="{ item }" v-if="item.isleaf">
            <!-- add  -->
            <v-btn v-if="add" @click="addChild(item);" text icon class="ml-3" color="success">
              <v-icon>mdi-plus-circle-outline</v-icon>
            </v-btn>
            <div v-if="edit">
              <v-btn :to="edit" @click="editChild(item);" text icon class="ml-3" color="primary">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </div>
            <div v-if="remove">
              <v-btn @click="deleteChild(item);" text icon class="ml-3" color="error">
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
            </div>

            <!-- {{ item }}
            {{ active }} -->
        </template>
      </v-treeview>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  name: 'tree',
  data() {
    return {
      myArray: '',
      active: [],
      open: [],
      nextId: 1000,
      activatable: true,
      openOnClick: true,
      selectedColor: 'accent',
      color: 'primary',
      childName: 'بدون عنوان',
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
                {
                  id: 4,
                  name: 'اقتصادی',
                  isleaf: true,
                },
                {
                  id: 5,
                  name: 'فرهنگی',
                  isleaf: true,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  props: {
    item: {
      type: Array,
    },
    edit: {
      type: String,
    },
    remove: {
      type: Boolean,
    },
    add: {
      type: Boolean,
      default: true,
    },
  },
  // eslint-disable-next-line consistent-return
  created() {
    // this.$emit('readyToUpdate', this.items);
  },
  watch: {
    active(to) {
      if (to) {
        this.open = to;
        // console.log(to);
        this.$emit('readyToUpdate', this.open);
      }
      // console.log(to);
      // if (!this.open.includes(to)) {
      //   this.open.push(to);
      // }
    },
  },
  // computed: {
  //   selected() {
  //     console.log('lll');
  //     if (!this.active.length) return undefined;

  //     const id = this.active[0];

  //     console.log('lll');
  //     return this.items.find(item => item.id === id);
  //   },
  // },
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
  components: {
    draggable,
  },
};
</script>
<style lang="scss" scoped>
.v-treeview-node__root  {
  background-color: red !important;
}
</style>

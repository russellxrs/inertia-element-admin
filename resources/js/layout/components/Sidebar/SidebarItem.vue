<template>
  <div>
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
        <el-menu-item :index="item.id.toString()" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.icon || item.icon" :title="onlyOneChild.title" />
        </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.id.toString()" popper-append-to-body>
      <template slot="title">
        <item :icon="item.icon" :title="item.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.id"
        :is-nest="true"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>

  </div>
</template>

<script>
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    // basePath: {
    //   type: String,
    //   default: ''
    // }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {}
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    // resolvePath(routePath) {
    //   if (isExternal(routePath)) {
    //     return routePath
    //   }
    //   if (isExternal(this.basePath)) {
    //     return this.basePath
    //   }
    //   return path.resolve(this.basePath, routePath)
    // }
  }
}
</script>

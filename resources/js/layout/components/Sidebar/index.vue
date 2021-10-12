<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="'1'"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.id" :item="route" />
        <!-- <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
//import variables from '@/styles/variables.scss'

  //  console.log(variables);

export default {
  components: { SidebarItem, Logo},
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes(){
      return window.laMenu
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      //return variables
      return {
        menuActiveText: "#409EFF",
        menuBg: "#304156",
        menuHover: "#263445",
        menuText: "#bfcbd9",
        sideBarWidth: "210px",
        subMenuActiveText: "#f4f4f5",
        subMenuBg: "#1f2d3d",
        subMenuHover: "#001528"
      }
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

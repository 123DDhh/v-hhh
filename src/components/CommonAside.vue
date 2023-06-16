<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#000"
    text-color="#fff"
    active-text-color="#fff"
  >
    <div style="margin-top: 20px"></div>
    <el-menu-item
      v-for="item in noChildren"
      @click="clickMenu(item)"
      :key="item.name"
      :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="subItem in item.children"
        :key="subItem.name"
        :index="subItem.name"
      >
        <el-menu-item @click="clickMenu(subItem)" index="1-1">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  overflow: hidden;
}
.el-menu {
    background-color: #000;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 20px;
    font-weight: 400;
  }
}
</style>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '快捷设置',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '座椅',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '灯光',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          path: '/page1',
          name: 'page1',
          label: '门窗',
          icon: 'setting',
          url: 'Other/PageOne'
        },
        {
          path: '/page2',
          name: 'page2',
          label: '充放电',
          icon: 'setting',
          url: 'Other/PageTwo'
        },
        {
          path: '/page1',
          name: 'page1',
          label: '驾驶',
          icon: 'setting',
          url: 'Other/PageOne'
        },
        {
          path: '/page2',
          name: 'page2',
          label: 'ZEEKR AD',
          icon: 'setting',
          url: 'Other/PageTwo'
        },
        {
          path: '/page1',
          name: 'page1',
          label: '安全保障',
          icon: 'setting',
          url: 'Other/PageOne'
        },
        {
          path: '/page2',
          name: 'page2',
          label: '连接',
          icon: 'setting',
          url: 'Other/PageTwo'
        },
        {
          path: '/page1',
          name: 'page1',
          label: '声音&通知',
          icon: 'setting',
          url: 'Other/PageOne'
        },
        {
          path: '/page2',
          name: 'page2',
          label: '显示',
          icon: 'setting',
          url: 'Other/PageTwo'
        },
        {
          path: '/page1',
          name: 'page1',
          label: '软件更新',
          icon: 'setting',
          url: 'Other/PageOne'
        },
        {
          path: '/page2',
          name: 'page2',
          label: 'ZEEKR 实验室',
          icon: 'setting',
          url: 'Other/PageTwo'
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单
    clickMenu(item) {
      // 当页面的路由与跳转的路由不一致的时候才允许跳转
      console.log('ddd', item);
      if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
        this.$router.push(item.path)
      }
    }
  },
  computed: {
    // 没有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children)
    },
    // 有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children)
    },

  }
}
</script>
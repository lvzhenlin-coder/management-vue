<template>
  <div>
    <div v-if="!isLogin">
      <a-layout has-sider>
        <a-layout-sider 
          :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
          width="13vw"
          theme="dark"
        >
          <home-sidebar></home-sidebar>
        </a-layout-sider>
      </a-layout>
      <a-layout
        :style="{ marginLeft: '13vw' }"
      >
        <home-header></home-header>
        <a-layout-content class="content">
          <router-view/>
        </a-layout-content>
        <!-- <a-layout-footer class="footer">
          <home-footer></home-footer>
        </a-layout-footer> -->
      </a-layout>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import { Layout } from 'ant-design-vue';
  import homeSidebar from '@/components/homeSidebar.vue'
  import homeHeader from '@/components/homeHeader.vue'
  import homeFooter from '@/components/homeFooter.vue'
import { constants } from 'buffer';
  export default {
    components: {
      ALayout: Layout,
      ALayoutSider: Layout.Sider,
      ALayoutHeader: Layout.Header,
      ALayoutContent: Layout.Content,
      ALayoutFooter: Layout.Footer,
      homeSidebar,
      homeHeader,
      homeFooter
    }
  }
</script>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, computed } from 'vue'
  
  console.log("路由信息----",useRouter().currentRoute._value.name)
  let isLogin = computed(() => {
    return useRouter().currentRoute._value.name === 'login'
  })
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
.header{
  margin: 0;
  padding: 0;
  background: #fff;
  padding: 0;
  height: 8vh;
}
.content{
  min-height: 92vh;
  background: #fff;
}
.footer{
  margin: 0;
  padding: 0;
  height: 4vh;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

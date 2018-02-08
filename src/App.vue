<template>
  <div id="app">

    <el-container>
      <el-header>
        <img class="thelogo" src="./assets/logo.png" alt="">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">迎机史志</el-menu-item>
          <el-menu-item index="3">迎机图片</el-menu-item>
          <el-menu-item index="4">迎机人物</el-menu-item>
          <el-menu-item index="5">联系管理员</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>

        <div v-if="routes[this.currentRoute] === 'home'">
          <el-carousel trigger="click" height="410px">
            <el-carousel-item v-for="item in 3" :key="item">
              <h3><img :src="imgResource[item-1]" alt=""></h3>
            </el-carousel-item>
          </el-carousel>
        </div>

        <DispImgText :blockName="'迎机史志'" v-if="routes[this.currentRoute] === 'shizhi'"/>
        <DispImgText :blockName="'迎机图片'" v-if="routes[this.currentRoute] === 'tupian'"/>
        <DispImgText :blockName="'迎机人物'" v-if="routes[this.currentRoute] === 'renwu'"/>
        <DispImgText :blockName="'联系管理员'" v-if="routes[this.currentRoute] === 'contact'"/>
        <div v-if="!routes[this.currentRoute]"><p>您输入的网址不对吧</p></div>

      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>

  </div>
</template>

<script>
import DispImgText from './components/DispImgText'

import lunbo1 from './assets/lunbo1.png'
import lunbo2 from './assets/lunbo2.png'
import lunbo3 from './assets/lunbo3.png'

export default {
  name: 'App',
  data () {
    return {
      currentRoute: window.location.pathname,
      routes: {
        '/': 'home',
        '/shizhi': 'shizhi' ,
        '/tupian': 'tupian',
        '/renwu': 'renwu',
        '/contact': 'contact'
      },
      imgResource: [lunbo1,lunbo2,lunbo3]
    }
  },
  components: {
    DispImgText
  },
  computed: {
    activeIndex2: function(){
      var orderss = {
        '/': '1',
        '/shizhi': '2' ,
        '/tupian': '3',
        '/renwu': '4',
        '/contact': '5'
      }; 
      return orderss[this.currentRoute];
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      switch(key){
        case '1': window.location.href = "/";
        break;
        case '2': window.location.href = "/shizhi";
        break;
        case '3': window.location.href = "/tupian";
        break;
        case '4': window.location.href = "/renwu";
        break;
        case '5': window.location.href = "/contact";
        break;
      }
    }
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-header, .el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header{
  text-align: left;
  .thelogo{
    width: 40px;
    margin: 10px 0;
  }
  .el-menu{
    display: inline-block;
    margin-left: 30px;
  }
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

</style>

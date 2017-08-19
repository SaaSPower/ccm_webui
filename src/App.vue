<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'app'
})
export default class App extends Vue {

}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

/* reset styles */
html {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

body {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-family: 'Hiragino Sans GB', 'Microsoft YaHei', 微软雅黑, STHeiti, 'WenQuanYi Micro Hei', SimSun, sans-serif;
    color: #2c3e50;
    overflow: hidden;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

input, select, textarea, button {
    font-family: inherit;
    outline: none;
    border: 0;
}

a {
    text-decoration: none;
}

::-webkit-scrollbar {
    display: none;
}
</style>

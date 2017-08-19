<template>
  <div id="app">
    <el-menu theme="dark" :default-active="activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item class="logo" index="noop">
        <img :src="logo" />
      </el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      <el-submenu class="avatar" index="avatar">
        <template slot="title">
          <span>JKZING</span>
        </template>
        <el-menu-item index="profile-1">个人中心</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="breadcrumb-nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const logo = require('./assets/logo.png')

@Component({
  name: 'app'
})
export default class App extends Vue {
  activeIndex: string = '0'
  logo: string = logo

  handleSelect() {

  }
}
</script>

<style scoped>
.header-menu {
  padding-right: 20px;
}

.breadcrumb-nav {
  background: #eff2f7;
  height: 43px;
  padding: 15px 20px;
}

.avatar {
  float: right;
}

.logo {
  border-bottom: none!important;
}

.logo img {
  vertical-align: middle;
  height: 40px;
  cursor: pointer;
}

.container {
  min-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>

<style>
.avatar .el-submenu__icon-arrow {
  display: none;
}
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

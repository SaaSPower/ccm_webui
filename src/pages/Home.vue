<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
const logo = require('../assets/logo.png')

@Component({
  name: 'home'
})
export default class Home extends Vue {
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
</style>

<style>
.avatar .el-submenu__icon-arrow {
  display: none;
}
</style>



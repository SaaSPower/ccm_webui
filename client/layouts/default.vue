<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <row type="flex" class="container">
      <i-col :span="spanLeft" class="layout-menu-left">
        <Menu active-name="1" theme="dark" width="auto">
          <div class="layout-logo-left"></div>
          <Menu-item name="1">
            <Icon type="ios-navigate" :size="iconSize"></Icon>
            <span class="layout-text">病历管理</span>
          </Menu-item>
          <Menu-item name="2">
            <Icon type="ios-keypad" :size="iconSize"></Icon>
            <span class="layout-text">量表管理</span>
          </Menu-item>
          <Menu-item name="3">
            <Icon type="ios-analytics" :size="iconSize"></Icon>
            <span class="layout-text">选项 3</span>
          </Menu-item>
        </Menu>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
        </div>
        <div class="layout-breadcrumb">
          <!-- <Breadcrumb>
            <Breadcrumb-item
              v-for="r in this.$route.matched"
              :key="r.name"
              :href="r.path"
            >{{ r.meta.label }}</Breadcrumb-item>
          </Breadcrumb> -->
        </div>
        <div class="layout-content">
          <nuxt></nuxt>
        </div>
        <div class="layout-copy">
          2017 &copy; SaaSPower
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  name: 'default'
})
export default class Default extends Vue {
  spanLeft: number = 5
  spanRight: number = 19

  get iconSize () {
    return this.spanLeft === 5 ? 14 : 24
  }

  get breadcrumbs () {
    return ''
    // return this.$route.matched.map(m => m.meta.label)
  }

  toggleClick () {
    if (this.spanLeft === 5) {
      this.spanLeft = 2
      this.spanRight = 22
    } else {
      this.spanLeft = 5
      this.spanRight = 19
    }
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.layout {
  width: 100%;
  height: 100%;
  border: 1px solid $color-border;
  background: $color-background;
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  &.layout-hide-text .layout-text {
    display: none;
  }
}

.container {
  width: 100%;
  height: 100%;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  border-radius: 4px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.ivu-col {
  transition: width .2s ease-in-out;
}
</style>

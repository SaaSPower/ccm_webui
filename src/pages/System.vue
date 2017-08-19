<template>
  <div class="system">
    <el-row class="system-row" v-for="(r, idx) in 5" :key="r" :gutter="20">
      <el-col :span="8" v-for="(o, index) in 3" :key="o">
        <el-card class="system-card" :body-style="{ padding: '0px' }">
          <div style="padding: 14px;">
            <span>系统{{ `${r}-${o}` }}</span>
            <div class="bottom clearfix">
              <time class="time">2017-08-20 18:00</time>
              <el-button class="action" type="text">编辑</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'system'
})
export default class System extends Vue{

}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.system-row {
  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.system-card {
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .time {
    color: $color-s;
  }

  .action {
    float: right;
    padding: 0;
  }
}
</style>



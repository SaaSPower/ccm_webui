<template>
  <div class="system">
    <Row class="system-row" :gutter="10" v-for="r in 5" :key="r">
      <i-col :span="8" v-for="n in 3" :key="n">
        <Card style="width:100%">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            经典电影
          </p>
          <a href="#" slot="extra" @click.prevent="seeDetails">
            <Icon type="edit"></Icon>
            详情
          </a>
          <ul>
            <li v-for="item in getSlice(n)" :key="item.url">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </li>
          </ul>
        </Card>
      </i-col>
    </Row>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

@Component({
  name: 'CaseHistory'
})
export default class CaseHistory extends Vue {
  movieList: Array<any> = [
    {
      name: '肖申克的救赎',
      url: 'https://movie.douban.com/subject/1292052/',
      rate: 9.6
    },
    {
      name: '这个杀手不太冷',
      url: 'https://movie.douban.com/subject/1295644/',
      rate: 9.4
    },
    {
      name: '霸王别姬',
      url: 'https://movie.douban.com/subject/1291546/',
      rate: 9.5
    },
    {
      name: '阿甘正传',
      url: 'https://movie.douban.com/subject/1292720/',
      rate: 9.4
    },
    {
      name: '美丽人生',
      url: 'https://movie.douban.com/subject/1292063/',
      rate: 9.5
    },
    {
      name: '千与千寻',
      url: 'https://movie.douban.com/subject/1291561/',
      rate: 9.2
    },
    {
      name: '辛德勒的名单',
      url: 'https://movie.douban.com/subject/1295124/',
      rate: 9.4
    },
    {
      name: '海上钢琴师',
      url: 'https://movie.douban.com/subject/1292001/',
      rate: 9.2
    },
    {
      name: '机器人总动员',
      url: 'https://movie.douban.com/subject/2131459/',
      rate: 9.3
    },
    {
      name: '盗梦空间',
      url: 'https://movie.douban.com/subject/3541415/',
      rate: 9.2
    }
  ]

  getSlice (n) {
    return this.movieList.slice(n * 2)
  }

  seeDetails () {
    console.log('placeholder')
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.system {
  padding: 10px;
  background: $white;
}

.system-row {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>



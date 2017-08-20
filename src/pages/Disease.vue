<template>
  <div class="disease">
    <Row>
      <Card :bordered="false">
        <p slot="title">Disease name</p>
        <p>Disease description ......</p>
      </Card>
    </Row>
    <Row class="patient-row">
      <Card :bordered="false">
        <p slot="title">Patients</p>
        <a href="#" slot="extra">
          <Icon type="plus-round"></Icon>
          新增
        </a>
        <Table :columns="columns" :data="patients"></Table>
      </Card>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import PatientRow from '@/components/PatientRow.vue'

@Component({
  name: 'disease',
  components: {
    PatientRow
  }
})
export default class Disease extends Vue {
  columns: Array<any> = [
    {
      type: 'expand',
      width: 50,
      render: (h, params) => {
        return h(PatientRow, {
          props: {
            row: params.row
          }
        })
      }
    },
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '年龄',
      key: 'age',
      filters: [
        {
          label: '大于18岁',
          value: 1
        },
        {
          label: '小于18岁',
          value: 2
        }
      ],
      filterMultiple: false,
      filterMethod (value, row) {
        if (value === 1) {
          return row.age > 18
        } else if (value === 2) {
          return row.age <= 18
        } else {
          return true
        }
      }
    },
    {
      title: '地址',
      key: 'address'
    },
    {
      title: '生日',
      key: 'birthday',
      sortable: true
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      align: 'center',
      render: (h, params) => {
        return h('div', [
          h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {}
            }
          }, '编辑'),
          h('Button', {
            props: {
              type: 'primary',
              size: 'small'
            },
            on: {
              click: () => {}
            }
          }, '记录')
        ])
      }
    }
  ]

  patients: Array<any> = [
    {
      name: '王小明',
      age: 18,
      address: '北京市朝阳区芍药居',
      job: '数据工程师',
      interest: '羽毛球',
      birthday: '1991-05-14',
      book: '乔布斯传',
      movie: '致命魔术',
      music: 'I Cry'
    },
    {
      name: '张小刚',
      age: 25,
      address: '北京市海淀区西二旗',
      job: '数据科学家',
      interest: '排球',
      birthday: '1989-03-18',
      book: '我的奋斗',
      movie: '罗马假日',
      music: 'My Heart Will Go On'
    },
    {
      name: '李小红',
      age: 30,
      address: '上海市浦东新区世纪大道',
      job: '数据产品经理',
      interest: '网球',
      birthday: '1992-01-31',
      book: '赢',
      movie: '乔布斯',
      music: 'Don’t Cry'
    },
    {
      name: '周小伟',
      age: 26,
      address: '深圳市南山区深南大道',
      job: '数据分析师',
      interest: '桌球，跑步',
      birthday: '1988-7-25',
      book: '红楼梦',
      movie: '倩女幽魂',
      music: '演员'
    }
  ]
}
</script>

<style lang="scss" scoped>
.disease {}

.patient-row {
  margin-top: 10px;
}
</style>

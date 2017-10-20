<template>
  <div class="new-rating-scale">
    <Form ref="formDynamic" :model="formDynamic" :label-width="80">
      <Card>
        <FormItem label="名称" prop="name" :rules="{required: true, message: '请输入量表名称'}">
          <Row>
            <Col span="18">
              <Input type="text" v-model="formDynamic.name" placeholder="请输入名称"></Input>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="病种" prop="disease" :rules="{required: true, message: '请选择病种'}">
          <Row>
            <Col span="18">
              <Cascader :data="mockOptions" v-model="formDynamic.disease"></Cascader>
            </Col>
          </Row>
        </FormItem>
      </Card>
      <Card>
        <Form-item
          v-for="(item, index) in formDynamic.fields"
          :key="index"
          :label="'项目' + (index + 1)"
          :prop="'fields.' + index + '.value'"
          :rules="{required: true, message: '项目' + (index + 1) + '不能为空', trigger: 'blur'}"
        >
          <Row>
            <Col span="18">
              <Input type="text" v-model="item.value" placeholder="请输入..."></Input>
            </Col>
            <Col span="4" offset="1">
              <Button type="ghost" @click="handleRemove(index)">删除</Button>
            </Col>
          </Row>
        </Form-item>
        <Form-item>
          <Row>
            <Col span="12">
              <Button type="dashed" long @click="handleAdd" icon="plus-round">新增</Button>
            </Col>
          </Row>
        </Form-item>
        <Form-item>
          <Button type="primary" @click="handleSubmit('formDynamic')">提交</Button>
          <Button type="ghost" @click="handleReset('formDynamic')" style="margin-left: 8px">重置</Button>
        </Form-item>
      </Card>
    </Form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

const mockOptions = [{
  value: 'beijing',
  label: '北京',
  children: [
    {
      value: 'gugong',
      label: '故宫'
    },
    {
      value: 'tiantan',
      label: '天坛'
    },
    {
      value: 'wangfujing',
      label: '王府井'
    }
  ]
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [
    {
      value: 'nanjing',
      label: '南京',
      children: [
        {
          value: 'fuzimiao',
          label: '夫子庙'
        }
      ]
    },
    {
      value: 'suzhou',
      label: '苏州',
      children: [
        {
          value: 'zhuozhengyuan',
          label: '拙政园'
        },
        {
          value: 'shizilin',
          label: '狮子林'
        }
      ]
    }
  ]
}]

@Component({
  name: 'NewRatingScale'
})
export default class NewRatingScale extends Vue {
  mockOptions: Array<any> = mockOptions
  formDynamic: any = {
    name: '',
    disease: [],
    fields: [
      {
        value: ''
      }
    ]
  }
  handleSubmit (name) {
    (this.$refs[name] as any).validate((valid) => {
      if (valid) {
        this.$Message.success('提交成功!')
      } else {
        this.$Message.error('表单验证失败!')
      }
    })
  }

  handleReset (name) {
    (this.$refs[name] as any).resetFields()
  }

  handleAdd () {
    this.formDynamic.fields.push({
      value: ''
    })
  }

  handleRemove (index) {
    this.formDynamic.fields.splice(index, 1)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.new-rating-scale {
  // padding: 10px;
  // background: $white;

  > .ivu-form > .ivu-card:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>


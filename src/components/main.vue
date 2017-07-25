<template>
  <div>
    <el-row>
        <el-breadcrumb separetor="/">
          <el-breadcrumb-item>报价管理</el-breadcrumb-item>
          <el-breadcrumb-item>报价列表</el-breadcrumb-item>
        </el-breadcrumb>
    </el-row>
    <el-row>
      <el-col>
        <i class="el-icon-minus"></i><span class="tt">报价列表</span>
      </el-col>
    </el-row>
    <el-row>
      <el-tabs @tab-click="handleClick">
        <el-tab-pane :label="'待报价（'+count+'）'"><tableList @tableCount="tableCount"></tableList></el-tab-pane>
        <el-tab-pane label="报价待确定"><tableList></tableList></el-tab-pane>
        <el-tab-pane label="未中标"><tableList></tableList></el-tab-pane>
        <el-tab-pane label="已中标"><tableList></tableList></el-tab-pane>
        <el-tab-pane label="全部报价单"><tableList></tableList></el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import tableList from './tableList';

export default {
  name: 'main_body',
  data() {
    return {
      count : ''
    }
  },
  components: {
    tableList
  },
  methods: {
    tableCount(count) {
      this.count = count;
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .el-row:nth-child(1) {
    margin: 20px auto;
  }

  .el-row:nth-child(2) {
    margin-bottom: 10px;
  }

  .el-icon-minus {
    transform: rotate(90deg);
  }

  .tt {
        font-size: 16px;
        font-weight: bold;
        color: #333;
  }
</style>
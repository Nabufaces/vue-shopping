<template>
    <el-menu default-active="2" uniqueOpened="uniqueOpened" class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">报价管理</template>
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-minus"></i>报价列表
            </template>
            <el-menu-item index="1-1">123</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
  export default{
    name:'sideBar',
    data:function(){
      return {
        uniqueOpened: true
      }
    }
  }
</script>

<style scoped>
  .el-icon-minus {
    transform: rotate(90deg);
  }
</style>
<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" router>
      <el-submenu index="1">
        <template slot="title">前端列表</template>
          <el-menu-item-group>
            <template slot="title">
              <i class="el-icon-minus"></i>Vue
            </template>
            <el-menu-item index="/">Base</el-menu-item>
            <el-menu-item index="/main">Vue-Router</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
    </el-menu>
</template>

<script>
  export default{
    name:'sideBar'
  }
</script>

<style scoped>
  .el-icon-minus {
    transform: rotate(90deg);
  }
</style>
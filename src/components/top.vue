<style>
    .top_menu{
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  .top_menu img{
    margin: 5px auto;
  }
</style>

<template>
  <div class="top_menu">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <img src="../img/logo.png">
      </el-menu-item>
      <el-menu-item index="2">
          我的博客
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">1</el-menu-item>
        <el-menu-item index="2-2">2</el-menu-item>
        <el-menu-item index="2-3">3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import ElMenuItem from "../../node_modules/element-ui/packages/menu/src/menu-item";
  export default{
    components: {ElMenuItem},
    name:'top_menu',
      data(){
          return{
              activeIndex:'1'
          };
      }
  }
</script>

<template>
  <div class="top_menu">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <img src="//haitao.nos.netease.com/2fecfadc7d48464b90c2fe9b5d92412a.svg">
      <el-menu-item index="1">
        <div class="tt">货代报价系统</div>
      </el-menu-item>
      <div class="user">hi gaowenlin@corp.netease.com 退出</div>
    </el-menu>
  </div>
</template>

<script>
  import ElMenuItem from "../../node_modules/element-ui/packages/menu/src/menu-item";
  export default{
    components: {ElMenuItem},
    name:'top_menu'
  }
</script>

<style scoped>
  .top_menu {
    height: 60px;
    line-height: 60px;
  }

  .top_menu img {
    float: left;
    margin-left: 20px;
  }

  .top_menu .tt {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }

  .top_menu .user {
    float: right;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    margin-right: 20px;
  }
</style>
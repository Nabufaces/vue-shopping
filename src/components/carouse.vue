<template>
  <el-carousel indicator-positon="outside">
    <el-carousel-item>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel-item:nth-child(2n){
      background-image: url("../img/carousel_1.jpg");
  }
  .el-carousel-item:nth-child(2n+1){
    background-image: url("../img/carousel_2.jpg");
  }
</style>

<script>
  export default{
      name:'carousel'
  }
</script>

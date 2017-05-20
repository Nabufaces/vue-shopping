<template>
  <div id="button-example">
    <button-example-1></button-example-1>
    <button-example-1></button-example-1>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default{
    name:'buttonExample'
  }

  var data = {counter:0};

  Vue.component('button-example-1',{
      template:'<el-button type="primary" v-on:click="counter++">{{counter}}</el-button>',
      data:function () {
        return data
      }
  })

  new Vue({
    el:'#button-example'
  })
</script>

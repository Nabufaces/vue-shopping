<template>
  <div id="app">
    <top_menu></top_menu>
    <el-row :gutter="10">
      <el-col :span="3">
          <sideBar></sideBar>
      </el-col>
      <el-col :span="21">
          <main_body></main_body>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import top_menu from './components/top';
import sideBar from './components/sideBar';
import main_body from './components/main';

export default {
  name: 'app',
  components: {
    top_menu,
    sideBar,
    main_body
  }
}
</script>

<style>

</style>

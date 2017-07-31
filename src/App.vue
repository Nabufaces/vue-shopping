<template>
  <div id="app">
    <top_menu></top_menu>
    <el-row :gutter="20">
      <el-col :span="4">
          <sideBar></sideBar>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import top_menu from './components/top'
import sideBar from './components/sideBar'
import modal from './components/modal/modal'

export default {
  name: 'app',
  components: {
    top_menu,
    sideBar,
    modal
  }
}
</script>
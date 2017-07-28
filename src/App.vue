<template>
  <div id="app">
    <top_menu></top_menu>
    <el-row :gutter="20">
      <el-col :span="3">
          <sideBar></sideBar>
      </el-col>
      <el-col :span="21">
          <main_body></main_body>
      </el-col>
    </el-row>
    <modal :showFlag="showFlag" title="modal标题">
        <div slot="body">123</div>
    </modal>
  </div>
</template>

<script>
import top_menu from './components/top';
import sideBar from './components/sideBar';
import main_body from './components/main';
import modal from './components/modal/modal';

export default {
  name: 'app',
  components: {
    top_menu,
    sideBar,
    main_body,
    modal
  },
  data() {
    return {
      showFlag: true,
      hasClose: false
    }
  },
  methods:{
    
  }
}
</script>
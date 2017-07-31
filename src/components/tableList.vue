<template>
  <div>
    <el-row>
      <el-col :span="6">
        起运地&nbsp;&nbsp;<el-select v-model="startPort" placeholder="起运地">
                <el-option
                  v-for="item in startPortStr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
      </el-col>
      <el-col :span="6">
        目的港&nbsp;&nbsp;<el-select v-model="startPort" placeholder="目的港">
                <el-option
                  v-for="item in startPortStr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
      </el-col>
      <el-col :span="6">
        采购方式&nbsp;&nbsp;<el-select v-model="startPort" placeholder="采购方式">
                <el-option
                  v-for="item in startPortStr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
      </el-col>
      <el-col :span="6">
        运输方式&nbsp;&nbsp;<el-select v-model="startPort" placeholder="运输方式">
                <el-option
                  v-for="item in startPortStr"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
          <el-input placeholder="报价单号/审批单号/国际物流单号"></el-input>
      </el-col>
      <el-col :span="6" :offset="1">
          <el-button type="danger">查询</el-button>
          <el-button @click.once="showFlag = true">重置</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%;text-align；center">
      <el-table-column
        prop="no"
        label="报价单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="auditNo"
        label="审批单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="documentaryNo"
        label="国际物流单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="purchaseTypeStr"
        label="采购方式"
        width="100">
      </el-table-column>
      <el-table-column
        prop="transportTypeStr"
        label="运输方式"
        width="100">
      </el-table-column>
      <el-table-column
        prop="startPortStr"
        label="起运地"
        width="120">
      </el-table-column>
      <el-table-column
        prop="endPortStr"
        label="目的港"
        width="120">
      </el-table-column>
    </el-table>
    <modal :showFlag="showFlag" title="modal标题">
        <div slot="body">123</div>
    </modal>
  </div>
</template>

<script>
import modal from './modal/modal';

export default {
  name: 'tableList',
  created () {
      this.$emit('tableCount', this.$data.tableData.length);
  },
  data () {
    return {
      showFlag: false,
      startPortStr: [{
          value: 1,
          label: '黄金糕'
        }, {
          value: 2,
          label: '双皮奶'
        }, {
          value: 3,
          label: '蚵仔煎'
        }, {
          value: 4,
          label: '龙须面'
        }, {
          value: 5,
          label: '北京烤鸭'
        }],
      startPort: '',
      tableData: [{
            "auditNo":"XHDESPD170711043",
            "chargableWeight":0E-8,
            "companyId":26,
            "companyStr":"YMBB",
            "containerCount":194,
            "currentChargeOrder":0,
            "dbCreateTime":"2017-07-21 14:13:18",
            "dbUpdateTime":"2017-07-21 14:13:18",
            "documentaryNo":"GJWL170720024",
            "endPort":34,
            "endPortStr":"法国直邮仓",
            "grossWeight":878.55000000,
            "id":10460,
            "no":"NTES170721001",
            "purchaseTypeStr":"EXW",
            "startPortStr":"巴黎",
            "statusStr":"待报价",
            "transportType":3,
            "transportTypeStr":"陆运",
            "updateTime":1500617598714,
            "volume":1.04500000
      }, {
        "auditNo":"XHDESPD170711043",
            "chargableWeight":0E-8,
            "companyId":26,
            "companyStr":"YMBB",
            "containerCount":194,
            "currentChargeOrder":0,
            "dbCreateTime":"2017-07-21 14:13:18",
            "dbUpdateTime":"2017-07-21 14:13:18",
            "documentaryNo":"GJWL170720024",
            "endPort":34,
            "endPortStr":"法国直邮仓",
            "grossWeight":878.55000000,
            "id":10460,
            "no":"NTES170721001",
            "purchaseTypeStr":"EXW",
            "startPortStr":"巴黎",
            "statusStr":"待报价",
            "transportType":3,
            "transportTypeStr":"陆运",
            "updateTime":1500617598714,
            "volume":1.04500000
      }]
    }
  },
  components: {
    modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-row {
    margin-bottom: 10px;
  }

  .el-table {
    text-align: center;
  }
</style>

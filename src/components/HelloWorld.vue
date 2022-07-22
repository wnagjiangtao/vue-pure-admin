<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import echarts from "../plugins/echarts";

const allAlign = ref(null);
const tableData = reactive([
  {
    id: 10001,
    name: "Test1",
    role: "Develop",
    sex: "Man",
    age: 28,
    address: "vxe-table 从入门到放弃",
  },
  {
    id: 10002,
    name: "Test2",
    role: "Test",
    sex: "Women",
    age: 22,
    address: "Guangzhou",
  },
  {
    id: 10003,
    name: "Test3",
    role: "PM",
    sex: "Man",
    age: 32,
    address: "Shanghai",
  },
  {
    id: 10004,
    name: "Test4",
    role: "Designer",
    sex: "Women ",
    age: 24,
    address: "Shanghai",
  },
]);

const main = ref();   


onMounted(()=>{
var myChart = echarts.init(main.value);  
var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

myChart.setOption(option);
})


</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>

  <vxe-table :align="allAlign" :data="tableData">
    <vxe-table-column type="seq" width="60"></vxe-table-column>
    <vxe-table-column field="name" title="Name"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex"></vxe-table-column>
    <vxe-table-column field="age" title="Age"></vxe-table-column>
  </vxe-table>


  <div ref="main" style="width: 600px;height:400px;"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

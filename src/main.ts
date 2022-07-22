import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { useTable } from './plugins/vxe-table'
import { useElementPlus } from './plugins/element-plus'
import { useEcharts } from './plugins/echarts'




createApp(App).use(useElementPlus).use(useEcharts).use(useTable).mount('#app')

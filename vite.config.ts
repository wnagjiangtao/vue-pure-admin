import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import ElementPlus from 'unplugin-element-plus/vite'

import {createStyleImportPlugin}  from 'vite-plugin-style-import'
// import vxe-table from 'vxe-table';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // element-plus 按需引入
    ElementPlus({}),
    createStyleImportPlugin ({
      libs: [
        {
          libraryName: 'vxe-table',
          esModule: true,
          resolveComponent: (name) => `vxe-table/es/${name}`,
          resolveStyle: (name) => `vxe-table/es/${name}/style.css`
        }
      ]
    })

  ],

  
})




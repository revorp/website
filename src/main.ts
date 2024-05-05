import { createApp } from 'vue'

import './index.css'

import App from './App.vue'
import router from './router'

/* vueform */
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

createApp(App).use(router).use(Vueform, vueformConfig).mount('#app')

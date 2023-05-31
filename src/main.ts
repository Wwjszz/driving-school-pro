import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import TDesign from "tdesign-vue-next"
import { createPinia } from "pinia"

// 引入组件库的少量全局样式变量
import "tdesign-vue-next/es/style/index.css"
import "./style"

const app = createApp(App)

app.use(TDesign)
app.use(createPinia)

app.mount("#app")

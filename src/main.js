import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importa los estilos CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Importa TODO el bundle de JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

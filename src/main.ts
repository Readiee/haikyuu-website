import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import UIComponents from '@/components/UI'

const app = createApp(App)

registerPlugins(app)

UIComponents.forEach(component => {
	if(component.__name) {
		app.component(component.__name, component)
	}
})

app.mount('#app')

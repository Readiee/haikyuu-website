/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { ThemeDefinition, createVuetify } from 'vuetify'
import { aliases, md } from 'vuetify/iconsets/md'

const darkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: '#11131B', // dark-blue
		surface: '#1E2025',
		primary: '#FF9900',
		'primary-lighten-1': '#fff0d9',
		secondary: '#898989',
		accent: '#FF4900',
	},
}

const lightTheme: ThemeDefinition = {
	dark: false,
	colors: {
		primary: '#FF9900',
		secondary: '#898989',
		accent: '#FF4900',
	},
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		defaultTheme: 'darkTheme',
		themes: {
			darkTheme,
			lightTheme,
		},
	},
	icons: {
		defaultSet: 'md',

		aliases,
		sets: {
			md,
		},
	},
	defaults: {
		VBtn: {
			style: [
				{ textTransform: 'none' },
				{ display: 'flex' },
				{ alingItems: 'center' },
				{ fontWeight: 'bold' },
				{ letterSpacing: '0' }
			],
		},
		VCard: {
			style: [
				{ borderRadius: '10px' }
			],
		}
	},
})

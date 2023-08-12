export default [
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/about/AboutView.vue'),
		middleware: false, // Публичная
		// children: [
		// 	{
		// 		path: '',
		// 		name: 'home',
		// 		component: () => import('@/views/home/HomeView.vue'),
		// 		middleware: false // Публичная
		// 	},
		// ],
	},
]

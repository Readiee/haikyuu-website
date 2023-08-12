export default [
	{
		path: '/wiki',
		name: 'wiki',
		component: () => import('@/views/wiki/WikiView.vue'),
		middleware: false, // Публичная
		// children: [
		// 	{
		// 		// path: '',
		// 		// name: 'home',
		// 		// component: () => import('@/views/home/HomeView.vue'),
		// 		// middleware: false // Публичная
		// 	},
		// ],
	},
]

export default [
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/views/blog/BlogView.vue'),
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

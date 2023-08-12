export default [
	{
		path: '/blogs',
		name: 'blogs',
		component: () => import('@/views/blog/BlogsView.vue'),
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

export default [
	{
		path: '/episodes',
		name: 'episodes',
		component: () => import('@/views/episodes/EpisodesView.vue'),
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

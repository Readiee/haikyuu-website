export default [
	{
		path: '/merch',
		name: 'merch',
		component: () => import('@/views/merch/MerchView.vue'),
		middleware: false, // 
		beforeEnter() {location.href = 'https://haikyuu.store/'}

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

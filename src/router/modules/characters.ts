export default [
	{
		path: '/characters',
		name: 'characters',
		component: () => import('@/views/characters/CharactersView.vue'),
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
	{
		path: '/character/:id',
		name: 'character',
		component: () => import('@/views/characters/CharacterView.vue'),
		middleware: false, // Публичная
	},
]

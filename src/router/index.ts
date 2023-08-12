// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import authRoutes from '@/router/modules/auth'
import homeRoutes from '@/router/modules/home'
import errorsRoutes from '@/router/modules/errors'
import aboutRoutes from '@/router/modules/about'
import blogRoutes from '@/router/modules/blog'
import charactersRoutes from '@/router/modules/characters'
import episodesRoutes from '@/router/modules/episodes'
import merchRoutes from '@/router/modules/merch'
import wikiRoutes from '@/router/modules/wiki'


const routes: RouteRecordRaw[] = [
	...authRoutes,
	...errorsRoutes,
	...homeRoutes,
	...aboutRoutes,
	...blogRoutes,
	...charactersRoutes,
	...episodesRoutes,
	...merchRoutes,
	...wikiRoutes,
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router

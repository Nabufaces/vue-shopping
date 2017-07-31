/**
 * Created by gaowenlin on 2017/7/31.
 */

import main_body from './components/main.vue'

const index1 = {
	template: '<div>foo</div>' 
}

const router = [
	{
		path: '/',
		component: main_body
	},
	{
		path: '/main',
		component: index1
	}
]	

export default router

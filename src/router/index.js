import Vue from 'vue'
import Router from 'vue-router'

import Ongoing from '@/components/ongoing'
import Upcoming from '@/components/upcoming'
import Past from '@/components/past'
import Data from '@/components/data'
import About from '@/components/about'
import Detail from '@/components/detail'
import Advertise from '@/components/advertise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ongoing',
      component: Ongoing
    },
    {
      path: '/ongoing',
      name: 'Ongoing',
      component: Ongoing
    },
    {
    	path:'/upcoming',
    	name:"Upcoming",
    	component:Upcoming
    },
    {
    	path:'/past',
    	name:"Past",
    	component:Past
    },
    {
    	path:'/data',
    	name:"Data",
    	component:Data
    },
    {
    	path:'/about',
    	name:"About",
    	component:About
    },
    {
    	path:'/detail/:id',
    	name:'Detail',
    	component:Detail
    },
    {
      path:'/advertise',
      name:"Advertise",
      component:Advertise
    }
  ]
})

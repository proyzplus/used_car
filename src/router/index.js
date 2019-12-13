import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import buy from '@/components/buy'
import sale from '@/components/sale'
import money from '@/components/money'
import service from '@/components/service'
import info from '@/components/infomation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    }, {
      path: '/sale',
      name: 'sale',
      component: sale
    },
    {
      path: '/money',
      name: 'money',
      component: money
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/service',
      name: 'service',
      component: service
    }
  ]
})

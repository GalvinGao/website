import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from "@/views/Projects";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { // params: (to, from, savedPosition)
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        icon: 'mdi-home',
        i18n: 'menu.home'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: {
        icon: 'mdi-list',
        i18n: 'menu.projects'
      },
      // children: [
      //   {
      //     path: ':zoneId/:stageId',
      //     name: 'ReportByZone_Selected',
      //     component: Report,
      //     props: true,
      //     meta: {
      //       i18n: 'menu.report'
      //     },
      //   }
      // ]
    }
  ]
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import ProjectIndex from "@/views/Project/ProjectIndex";
import Console from "@/utils/Console";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) { // params: (to, from, savedPosition)
    Console.debug("Router", "scrollBehavior | to .name:", to.name, "from .name:", from.name, "savedPosition:", savedPosition)
    // if (from === "Home" && to === "Projects") return savedPosition
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
      component: ProjectIndex,
      meta: {
        icon: 'mdi-view-list',
        i18n: 'menu.projects'
      }
    }
  ]
})

export default router

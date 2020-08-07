<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="safe-area--navigation-drawer"
      width="300px"
    >
      <Logo />
      <v-list
        dense
        nav
        class="safe-area--navigation"
      >
        <Navigation
          v-for="route in routes"
          :key="route.name"
          :route="route"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fade-img-on-scroll
      shrink-on-scroll
      prominent
      :src="require('@/assets/header.jpg')"
      app
      dark
      class="flex-column"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        />
      </template>

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />

      <v-toolbar-title class="ml-0 d-flex flex-row align-center">
        <v-avatar
          :size="32"
          class="mr-2"
        >
          <v-img src="https://blog.upyun.galvincdn.com/253ce5604bbbafd37a6cb6e15da1256b.png" />
        </v-avatar>
        <span class="title force-lang-font">
          {{ $t($router.currentRoute.meta.i18n) }}
        </span>
      </v-toolbar-title>

      <!--      <v-progress-linear-->
      <!--        :active="pending"-->
      <!--        :indeterminate="pending"-->
      <!--        absolute-->
      <!--        bottom-->
      <!--        class="width: 100%"-->
      <!--        color="deep-purple accent-4"-->
      <!--      />-->
    </v-app-bar>
    <v-content
      class="safe-area--v-content"
      style="margin-top: 72px"
    >
      <transition
        name="slide-fade"
        mode="out-in"
      >
        <router-view />
      </transition>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import './styles/global.sass'
import './styles/global.css'
import './styles/vuetify-modification.sass'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {Footer, Navigation},
  data () {
    return {
      routes: [],
      drawer: !this.$vuetify.breakpoint.xsOnly,
    }
  },
  created () {
    this.routes = this.$router.options.routes.filter(el => !el.meta.hide);
  },
}
</script>

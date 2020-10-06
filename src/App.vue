<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="safe-area--navigation-drawer"
      width="300px"
    >
      <v-list
        dense
        nav
        class="safe-area--navigation"
      >
        <v-list-item
          @click="$router.push({name: 'Home'})"
        >
          <v-list-item-content>
            <v-list-item-title class="title py-4 text-center">
              <v-avatar
                :size="80"
                class="mb-4"
              >
                <v-img
                  :src="require('@/assets/avatar-2dim.jpg')"
                  :aspect-ratio="1"
                  height="80"
                  class="mx-auto logo"
                  contain
                />
              </v-avatar>
              <h2 class="overline text-center">
                the one the only
              </h2>
              <h1 class="title text-center d-flex flex-row flex-gutters-1 justify-center">
                高逸扬
                <v-icon
                  :size="12"
                  class="mx-2"
                >
                  mdi-asterisk
                </v-icon>
                Galvin Gao
              </h1>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-1" />
        
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

      <v-toolbar-title class="ml-0 pl-2 d-flex flex-row align-center">
        <v-avatar
          :size="32"
          class="mr-2"
        >
          <v-img
            :src="require('@/assets/avatar-2dim.jpg')"
            :aspect-ratio="1"
          />
        </v-avatar>
        <span class="title force-lang-font ml-1">
          {{ $t($route.meta.i18n) }}
        </span>
      </v-toolbar-title>

      <v-spacer />

      <LocaleSwitcher />

      <!--      <v-progress-linear-->
      <!--        :active="pending"-->
      <!--        :indeterminate="pending"-->
      <!--        absolute-->
      <!--        bottom-->
      <!--        class="width: 100%"-->
      <!--        color="deep-purple accent-4"-->
      <!--      />-->
    </v-app-bar>
    <v-main
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
    </v-main>
  </v-app>
</template>

<script>
import './styles/global.sass'
import './styles/global.css'
import './styles/vuetify-modification.sass'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LocaleSwitcher from "@/components/settings/LocaleSwitcher";
import EntryHook from "@/mixins/hooks/entry"

export default {
  name: 'App',
  components: {LocaleSwitcher, Footer, Navigation},
  mixins: [EntryHook],
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

<style scoped>
  .logo {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, .5));
  }
</style>

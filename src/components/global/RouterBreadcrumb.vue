<template>
  <v-breadcrumbs
    :items="computedItems"
    class="px-0"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        exact
        :to="{name: item.name}"
        :disabled="item.disabled"
      >
        <v-icon v-if="item.icon">
          {{ item.icon }}
        </v-icon>
        <template v-else>
          <span class="white--text">
            {{ item.text }}
          </span>
        </template>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
import getters from "@/utils/getters";

export default {
name: "RouterBreadcrumb",
  props: {
    items: {
      type: Array,
      default: () => null
    },
  },
  computed: {
    computedItems() {
      const self = this;
      function getDefaultBreadcrumbForRoute(route) {
        return {
          text: self.$t(route.meta.i18n),
          disabled: false,
          name: route.name
        }
      }
      function getDefaultBreadcrumbForNamedRoute(name) {
        return getDefaultBreadcrumbForRoute(self.$router.options.routes.find(el => el.name === name))
      }

      const breadcrumbs = [
        {
          ...getDefaultBreadcrumbForNamedRoute("Home"),
          icon: "mdi-home"
        }
      ]

      for (const route of this.$router.currentRoute.matched) {
        const current = getDefaultBreadcrumbForRoute(route);
        if (route.name === "ProjectDetail") {
          breadcrumbs.push(getDefaultBreadcrumbForNamedRoute("ProjectList"))

          const project = getters.projects.bySlug(this.$route.params.slug)
          current.text = project.title || this.$t('projects.unknown')
          current.disabled = true
        }
        breadcrumbs.push(current)
      }
      return breadcrumbs
    }
  },
}
</script>

<style scoped>

</style>
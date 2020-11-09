<template>
  <v-img
    v-if="icon"
    :alt="host"

    class="site-icon"
    height="32"
    width="32"

    :src="icon"
    contain
  >
    <template #placeholder>
      <v-icon>
        mdi-link
      </v-icon>
    </template>
  </v-img>
  <v-icon v-else>
    mdi-link
  </v-icon>
</template>

<script>
import getters from "@/utils/getters";

export default {
  name: "SiteIcon",
  props: {
    url: {
      type: String,
      required: true
    },
  },
  computed: {
    host() {
      return new URL(this.url).hostname
    },
    icon() {
      const url = getters.sites.byURL(this.url)
      if (url) return url.icon
      return null
    }
  },
}
</script>

<style scoped>
.site-icon {
  /*filter: drop-shadow(0 0 2px rgba(255, 255, 255, .7));*/
}
</style>
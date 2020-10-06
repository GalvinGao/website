<template>
  <v-footer
    padless
    :color="color"
    class="white--text"
  >
    <v-card
      flat
      tile
      width="100%"
      :color="color"
      class="text-center footer--safe-area mt-1 mb-1"
    >
      <v-card-text class="white--text d-inline">
        <strong>Galvin Gao</strong>
        —
        <strong>2020</strong>
      </v-card-text>

      <v-card-text
        class="white--text d-flex align-center justify-center pt-0 pb-0 overline condensed"
      >
        <v-btn
          small
          depressed
          light
          href="https://github.com/GalvinGao/website"
          target="_blank"
          class="ma-1"
        >
          <v-icon
            small
            class="mr-1"
          >
            mdi-github-circle
          </v-icon>

          {{ $t('footer.source') }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      color: "secondary darken-1"
    }
  }
}
</script>

<style scoped>
.condensed {
  letter-spacing: .075em !important;
}
.clear-link {
  color: inherit !important;
  text-decoration: none !important;
}
</style>
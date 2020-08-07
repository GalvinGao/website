<template>
  <v-footer
    padless
    class="white--text"
  >
    <v-card
      flat
      tile
      width="100%"
      class="text-center footer--safe-area"
    >
      <v-card-text class="white--text d-inline my-1">
        <strong>Galvin Gao</strong>
        —
        <strong>2020</strong>
        <span class="overline monospace condensed ml-1">@imgg</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
.condensed {
  letter-spacing: .075em !important;
}
</style>
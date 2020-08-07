<template>
  <v-parallax
    dark
    :src="require('@/assets/hero.jpg')"
    height="700"
    class="elevation-12"
  >
    <v-row
      align="center"
      justify="center"
      class="text-center fill-height"
    >
      <v-col
        cols="12"
        sm="12"
        md="5"
        lg="5"
        xl="5"
      >
        <v-avatar
          size="256px"
          class="glow bl-lighten"
        >
          <v-img
            :src="require('@/assets/avatar.jpeg')"
            aspect-ratio="1"
            contain
            height="256px"
          />
        </v-avatar>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="7"
        lg="7"
        xl="7"
        class="text-md-left text-lg-left text-xl-left"
      >
        <h1 class="display-3 font-weight-light mb-3 ml-n1">
          Galvin Gao
        </h1>
        <h2 class="subheading" />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>

</style>
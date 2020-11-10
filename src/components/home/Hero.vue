<template>
  <v-parallax
    dark
    :src="require('@/assets/hero.jpg')"
    :height="$vuetify.breakpoint.smAndDown ? 500 : 650"
    class="elevation-12"
  >
    <v-row
      align="center"
      justify="center"
      class="text-center fill-height align-content-center"
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
          class="glow"
        >
          <v-img
            :src="require('@/assets/avatar-2dim.jpg')"
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
        class="text-md-left text-lg-left text-xl-left px-12"
      >
        <h1
          class="font-weight-light mb-3 ml-n1"
          :class="{'display-2': dense, 'display-3': !dense}"
        >
          Galvin Gao
        </h1>
        <h2 :class="{'body-1': dense, 'subheading': !dense}">
          A {{ injection }} years old coding enthusiast and a humorous human being.
        </h2>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Hero",
  computed: {
    injection () {
      return "{{ new Date().getFullYear() - 2002 }}"
    },
    dense () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
}
</script>

<style scoped>

</style>
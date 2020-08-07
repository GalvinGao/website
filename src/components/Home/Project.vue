<template>
  <v-card>
    <v-img :src="project.hero" />
    <v-card-title>
      {{ project.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ project.subtitle }}
    </v-card-subtitle>
    <v-card-text>
      {{ project.text }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
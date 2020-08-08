<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      class="text-center"
    >
      <h1 class="mt-12 display-1">
        Projects
      </h1>
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row
          align="start"
          justify="center"
        >
          <v-col
            v-for="project in projects"
            :key="project.slug"
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
          >
            <Project :project="project" />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Project from "@/components/Home/Project";
import getters from "@/utils/getters";
export default {
  name: "Projects",
  components: {Project},
  computed: {
    projects() {
      return getters.projects.all();
    }
  },
}
</script>

<style scoped>

</style>
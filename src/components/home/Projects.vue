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
        {{ $t('projects._name') }}
      </h1>
    </v-col>
    <v-col cols="12">
      <v-container>
        <v-row
          justify="center"
        >
          <v-col
            v-for="project in projects"
            :key="project.slug"
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="4"

            class="align-content-stretch"
          >
            <Project
              :project="project"
              style="height: 100%"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="4"

            class="align-content-stretch"
          >
            <v-card
              v-if="more"
              class="d-flex flex-column align-center justify-center"
              flat
              color="transparent"
              style="height: 100%"

              :to="{ name: 'Projects' }"
            >
              <div class="d-flex flex-column align-center justify-center flex-grow-1">
                <v-icon
                  x-large
                >
                  mdi-chevron-right-circle
                </v-icon>
                <v-card-title class="pb-0">
                  {{ $t('projects.more') }}
                </v-card-title>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Project from "@/components/home/Project";
import getters from "@/utils/getters";
export default {
  name: "Projects",
  components: {Project},
  props: {
    /** Limit the amount of projects being displayed. Projects will be truncated by this amount. Supply 0 to display all projects at once. Default: 0 (display all) */
    limit: {
      type: Number,
      default: 0
    }
  },
  computed: {
    projects() {
      let result = getters.projects.all();
      if (this.more) result = result.slice(0, this.limit)
      return result;
    },
    more () {
      return !!this.limit
    }
  },
}
</script>

<style scoped>

</style>
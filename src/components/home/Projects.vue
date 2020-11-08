<template>
  <v-container>
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
        <v-row justify="center">
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
            v-if="more"
              
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="4"

            class="align-content-stretch"
          >
            <BackdropCard
              hover
              :to="{ name: 'Projects' }"
              color="transparent"
              class="d-flex flex-column align-center justify-center pa-0"
              style="height: 100%; border: 1px solid white !important; padding: 0 !important;"
            >
              <template #backdrop>
                <v-icon :size="192">
                  mdi-chevron-right
                </v-icon>
              </template>
              <v-img
                :src="require('@/assets/header.jpg')"
                class="img-backdrop-blur"
              >
                <v-row
                  align="center"
                  justify="center"
                  class="fill-height"
                >
                  <v-col
                    cols="12"
                    class="d-flex flex-column"
                  >
                    <span class="overline justify-center text-center backdrop-card--hoverable__reflector">
                      View More Projects
                    </span>
                    <span class="display-1 justify-center text-center backdrop-card--hoverable__reflector">
                      {{ $t('projects.more') }}
                    </span>
                  </v-col>
                </v-row>
              </v-img>
            </BackdropCard>
            <!--            <v-card-->
            <!--              v-if="more"-->
            <!--              color="transparent"-->
            <!--              class="d-flex flex-column align-center justify-center"-->
            <!--              flat-->
            <!--              style="height: 100%; border: 1px solid white !important"-->

            <!--              :to="{ name: 'Projects' }"-->
            <!--            >-->
            <!--              -->
            <!--            </v-card>-->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Project from "@/components/home/Project";
import getters from "@/utils/getters";
import BackdropCard from "@/components/global/BackdropCard";
export default {
  name: "Projects",
  components: {BackdropCard, Project},
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
      return this.limit !== 0
    }
  },
}
</script>

<style scoped>

</style>
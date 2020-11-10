<template>
  <v-row
    align="start"
    align-content="start"
    justify="start"
    class="no-gutters fill-height"
  >
    <v-col cols="12">
      <!--            gradient="to top right, rgba(0, 0, 0, .2), rgba(15, 45, 80, .4)"-->
      <v-img
        :src="cdnDeliver(project.hero)"
        :height="$vuetify.breakpoint.smAndDown ? 400 : 650"
        aspect-ratio="1.5"
        gradient="to top, rgba(18, 18, 18, 1), rgba(18, 18, 18, .7) 10%, rgba(18, 18, 18, .3) 25%, rgba(18, 18, 18, .05)"
      >
        <!--        <div class="d-flex backdrop-title fill-height mt-4">-->
        <!--          <div class="backdrop-title-content mx-12">-->
        <!--            {{ project.title_i18n.en }}-->
        <!--          </div>-->
        <!--        </div>-->
      </v-img>
    </v-col>
    <v-container
      class="black--text"
      style="margin-top: -160px; z-index: 2"
    >
      <v-col
        cols="12"
        class="project-headline white--text px-12 py-6"
      >
        <RouterBreadcrumb />
        <h1 class="display-2 project-title">
          {{ project.title }}
        </h1>
        <span class="d-block subtitle-1 project-subtitle mt-6 py-2">
          {{ project.subtitle }}
        </span>
      </v-col>
    </v-container>
  </v-row>
</template>

<script>
import getters from "@/utils/getters";
import CDN from "@/mixins/CDN";
import RouterBreadcrumb from "@/components/global/RouterBreadcrumb";

export default {
  name: 'ProjectDetail',
  components: {RouterBreadcrumb},
  mixins: [CDN],
  props: {
    slug: {
      type: String,
      required: true
    },
  },
  metaInfo () {
    return {
      meta: [
        {
          name: 'description',
          content: this.project.subtitle
        }
      ]
    }
  },
  computed: {
    project () {
      return getters.projects.bySlug(this.slug)
    }
  }
}
</script>

<style scoped lang="sass">
.project-headline
  padding: 1.5625rem !important

  .project-title
    text-shadow: 0 0 5px rgba(255, 255, 255, .9), 0 0 10px rgba(255, 255, 255, .3), 0 0 30px rgba(255, 255, 255, .3) !important
    line-height: 3.65rem

  .project-subtitle
    padding: 0 16px
    border-left: 3px solid white
    background: rgba(255, 255, 255, .03)


  //.project-subtitle::before
  //  content: ""
  //  display: block
  //  position: absolute
  //  height: 100%
  //  width: 4px
  //  background: white

  

.card-background
  background: rgba(200, 200, 200, .8)
  box-shadow: 0 0 30px rgba(0, 0, 0, .3)
  padding: 48px
  border-radius: 4px

.backdrop-title
  overflow: hidden
  user-select: none
  pointer-events: none

  .backdrop-title-content
    font-size: 80px
    word-break: keep-all
    overflow: hidden
    mix-blend-mode: overlay
    font-weight: bolder
    line-height: 88px
    opacity: 0.2

</style>
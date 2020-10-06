<template>
  <v-tooltip
    bottom
    transition="slide-y-transition"
    content-class="transparent backdrop-blur pa-0"
  >
    <template #activator="{ on }">
      <v-chip
        tag
        small
        class="mr-1 mt-1"
        v-on="on"
      >
        <v-icon
          small
          class="mr-1"
        >
          {{ tag.icon }}
        </v-icon>
        {{ $t('projects.tags.' + tag.tag) }}
      </v-chip>
    </template>
    <v-card
      width="300"
    >
      <v-list
        dark
        class="blue-grey darken-3"
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>
              {{ tag.icon }}
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('projects.tags.' + tag.tag) }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ tag.tag }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-progress-circular
            rotate="-90"
            :value="tag.score * 10"
          >
            <template #default>
              {{ tag.score }}
            </template>
          </v-progress-circular>
        </v-list-item>
      </v-list>

      <!--      <v-subheader>-->
      <!--        About-->
      <!--      </v-subheader>-->
      <!--      <v-card-subtitle class="pt-0">-->
      <!--        Premiere Pro is the professional tool to create videos.-->
      <!--      </v-card-subtitle>-->
    </v-card>
  </v-tooltip>
<!--  <v-menu-->
<!--    v-model="active"-->
<!--    nudge-bottom="16px"-->
<!--    bottom-->
<!--    open-on-hover-->
<!--    :close-on-content-click="false"-->
<!--    transition="scale-transition"-->
<!--    origin="16px 10px"-->
<!--  >-->
<!--    <template v-slot:activator="{ on }">-->
<!--      -->
<!--    </template>-->
<!--    -->
<!--  </v-menu>-->
</template>

<script>
export default {
  name: "ProjectTag",
  props: {
    tag: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
  },
};
</script>

<style scoped>
</style>
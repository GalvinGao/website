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
        v-bind="chipOptionalBinding"
        v-on="on"
      >
        <!--        <v-icon-->
        <!--          small-->
        <!--          class="mr-1"-->
        <!--        >-->
        <!--          {{ language.icon }}-->
        <!--        </v-icon>-->
        {{ language.name.translated }}
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
              mdi-translate
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ language.name.translated }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ language.name.original }}
              <span class="monospace">({{ language.id }})</span>
            </v-list-item-subtitle>
          </v-list-item-content>
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
const localLanguageMap = {
  "zh": "zh-hans",
  "en": "en-US"
}

export default {
  name: "LanguageTag",
  props: {
    language: {
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
    chipOptionalBinding() {
      const o = {}
      if (localLanguageMap[this.$i18n.locale] === this.language.id) o["color"] = "green darken-2"
      return o
    },
  },
};
</script>

<style scoped>
</style>
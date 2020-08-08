<template>
  <v-card>
    <v-img
      :src="project.hero"
      max-height="270px"
    />
    <v-card-title>
      {{ project.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ project.subtitle }}
    </v-card-subtitle>
    <v-card-text>
      {{ project.text }}
    </v-card-text>
    <v-divider />
    <v-card-actions class="flex-wrap no-extra-margin">
      <v-btn
        v-for="hyperlink of hyperlinks"
        :key="hyperlink.content"
        :href="hyperlink.content"
        target="_blank"
        depressed
        small
        :color="hyperlink.color"
      >
        <v-icon left>
          {{ hyperlink.icon }}
        </v-icon>
        {{ hyperlink.title }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import strings from "@/utils/strings";

export default {
  name: "Project",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    hyperlinks() {
      return this.project.attachments
          .filter(el => el.type === "hyperlink")
          .map(el => strings.translateBulk(el, [
              "title"
          ]));
    }
  },
}
</script>

<style scoped>
.v-card__actions.no-extra-margin > .v-btn.v-btn .v-icon--left {
  margin-left: 0 !important;
}
</style>
<template>
  <v-card class="d-flex flex-column">
    <v-img
      :aspect-ratio="1.5"
      :src="cdnDeliver(project.hero)"
      height="250px"
      max-height="250px"
    />
    <v-card-title>
      {{ project.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ project.subtitle }}
    </v-card-subtitle>
    <v-card-text>
      <v-list
        two-line
        dense
        class="py-0"
      >
        <v-list-item>
          <v-list-item-action>
            <v-icon>
              mdi-shape
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ $t('projects.category._name') }}
            </v-list-item-title>
            <v-list-item-subtitle class="nowrap">
              {{ $t('projects.category.' + project.category) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>
              mdi-tag
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ $t('projects.tags._name') }}
            </v-list-item-title>
            <v-list-item-subtitle class="nowrap">
              <ProjectTag
                v-for="tag in project.tags"
                :key="`${project.slug}-${tag.tag}`"

                :tag="tag"
              />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>
              mdi-translate
            </v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              {{ $t('projects.languages._name') }}
            </v-list-item-title>
            <v-list-item-subtitle class="nowrap">
              <LanguageTag
                v-for="language in project.languages"
                :key="`${project.slug}-${language.id}`"

                :language="language"
              />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>

    <v-spacer />
    <v-divider />

    <v-card-actions class="flex-wrap no-extra-margin pa-4">
      <Hyperlink
        v-for="hyperlink of hyperlinks"
        :key="hyperlink.content"

        :hyperlink="hyperlink"
      />
    </v-card-actions>
    <v-divider />

    <v-card-actions>
      <v-btn
        block
        text
        large
        :to="{name: 'ProjectDetail', params: {slug: project.slug}}"
      >
        了解更多
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ProjectTag from "@/components/projects/ProjectTag";
import CDN from "@/mixins/CDN";
import LanguageTag from "@/components/projects/LanguageTag";
import Hyperlink from "@/components/projects/Hyperlink";
export default {
  name: "Project",
  components: {Hyperlink, LanguageTag, ProjectTag},
  mixins: [CDN],
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    hyperlinks() {
      return this.project.attachments
          .filter(el => el.type === "hyperlink");
    }
  },
}
</script>

<style scoped>
.v-card__actions.no-extra-margin > .v-btn.v-btn .v-icon--left {
  margin-left: 0 !important;
}
.nowrap {
  white-space: normal !important;
}
</style>
<template>
  <v-tooltip
    bottom
    transition="slide-y-transition"
    content-class="transparent backdrop-blur pa-0"
  >
    <template #activator="{ on }">
      <v-btn
        :href="hyperlink.content"
        target="_blank"
        depressed
        small
        :color="hyperlink.color"
        class="d-flex flex-row mr-2"
        v-on="on"

        @mousedown="toggleHover(true)"
        @mouseup="toggleHover(false)"
        @mouseleave="toggleHover(false)"
        @mouseout="toggleHover(false)"
      >
        <v-icon
          left
          class="ml-0 mr-1"
        >
          {{ hyperlink.icon }}
        </v-icon>
        {{ hyperlink.title }}
      </v-btn>
    </template>
    <v-card width="350">
      <v-fade-transition>
        <v-overlay
          v-if="hoverState"
          absolute
          :opacity="0.8"
          class="border-white-1"
        >
          <div class="scroll-to-right-animation">
            <v-icon
              x-large
            >
              mdi-chevron-right
            </v-icon>
            <v-icon
              x-large
              class="scroll-to-right-animation__parallex-section"
            >
              mdi-chevron-right
            </v-icon>
          </div>
        </v-overlay>
      </v-fade-transition>
      <v-list
        dark
        class="blue darken-4"
      >
        <v-list-item>
          <v-list-item-avatar tile>
            <!--            <v-icon>-->
            <!--              mdi-link-->
            <!--            </v-icon>-->
            <URLIcon :url="hyperlink.content" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ hyperlink.title }}
            </v-list-item-title>
            <v-list-item-subtitle class="monospace v-list--text-no-wrap">
              <ColoredURL :url="hyperlink.content" />
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>
              mdi-open-in-new
            </v-icon>
          </v-list-item-icon>
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
import ColoredURL from "@/components/global/ColoredURL";
import URLIcon from "@/components/global/URLIcon";
export default {
  name: "Hyperlink",
  components: {URLIcon, ColoredURL},
  props: {
    hyperlink: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      hoverState: false
    };
  },
  computed: {
  },
  methods: {
    toggleHover(state) {
      this.hoverState = state
    }
  },
};
</script>

<style lang="sass">

</style>
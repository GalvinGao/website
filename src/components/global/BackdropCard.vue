<template>
  <v-card
    :hover="hover"
    class="text-center backdrop-card"
    :class="{'backdrop-card--hoverable': hover, 'backdrop-card--darken': darken, 'pa-4': !dense}"
    v-bind="$attrs"
  >
    <div class="backdrop-icon">
      <slot name="backdrop" />
    </div>

    <slot />
  </v-card>
</template>

<script>
export default {
  name: "BackdropCard",
  props: {
    hover: {
      type: Boolean,
      default () {
        return false
      }
    },
    darken: {
      type: Boolean,
      default () {
        return false
      }
    },
    dense: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
}
</script>

<style scoped>
.backdrop-card {
  overflow: hidden;
}
.backdrop-icon {
  position: absolute;
  bottom: -0rem;
  right: 0;
  user-select: none;
  z-index: 1;
  opacity: 0.25;
  transform-origin: bottom right;
}
.backdrop-card--hoverable .backdrop-icon, .backdrop-card--hoverable ::v-deep .d-flex {
  transition: transform .225s cubic-bezier(.35,1.61,.73,1), opacity .225s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.backdrop-card--hoverable:hover .backdrop-icon {
  opacity: 0.8;
  transform: scale(1.05) rotate(2deg);
}
.backdrop-card--hoverable:hover ::v-deep .d-flex {
  transform: scale(1.15) rotate(1deg);
}
.backdrop-card--hoverable ::v-deep .v-image__image {
  transition: all .475s cubic-bezier(.1,.5,.4,1);
}
.backdrop-card--hoverable:hover ::v-deep .v-image__image {
  transform: scale(1.6) rotate(-3deg);
}

.backdrop-card--darken .backdrop-icon {
  opacity: 0.1;
}
.backdrop-card--hoverable.backdrop-card--darken:hover .backdrop-icon {
  opacity: 0.2;
}

::v-deep .backdrop-icon > * {
  font-size: 8rem;
}
</style>
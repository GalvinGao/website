<template>
  <span class="d-inline">
    <span
      v-for="segment in segments"
      :key="segment.content"
      class="d-inline"
      :style="{'color': segment.emphasis ? 'white' : '#a0a3a4'}"

      v-text="segment.content"
    />
  </span>
</template>

<script>
export default {
  name: "ColoredURL",
  props: {
    url: {
      type: String,
      required: true
    },
  },
  computed: {
    segments() {
      const segments = [];
      const u = new URL(this.url)
      if (u.protocol) {
        segments.push({emphasis: true, content: u.protocol.replace(":", "")})
        segments.push({content: "://"})
      }
      if (u.origin) segments.push({emphasis: true, content: u.hostname})
      segments.push({content: u.href.split(u.hostname)[1]})
      return segments;
    }
  },
}
</script>

<style scoped>

</style>
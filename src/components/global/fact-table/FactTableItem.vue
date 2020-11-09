<template>
  <div class="d-block mr-3">
    <div class="overline">
      <slot
        v-if="!!$slots.title"
        name="title"
      />
      <template
        v-else
      >
        {{ title }}
      </template>
    </div>
    <div class="body-1 mt-n1">
      <slot
        v-if="!!$slots.content"
        name="content"
      />
      <template
        v-else
      >
        {{ content }}
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "FactTableItem",
  props: {
    title: {
      type: String,
      default: () => ""
    },
    content: {
      type: String,
      default: () => ""
    },
  },
  mounted() {
    console.log(this.$slots)
  }
}
</script>

<style scoped>

</style>
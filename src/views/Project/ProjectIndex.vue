<template>
  <div>
    <Projects />
  </div>
</template>

<script>
import Projects from "@/components/home/Projects";
export default {
  name: 'ProjectIndex',
  components: {Projects},
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: "Here's the list of projects which that I've contributed to :D"
      }
    ]
  }
}
</script>
<template>
  <div class="home">
    <Hero />
    <Projects :limit="2" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
export default {
  name: 'Home',
  // eslint-disable-next-line vue/no-unused-components
  components: {Projects, Hero},
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: "Welcome to the portfolio of Galvin Gao, which includes lots of projects that I have contributed to :D"
      }
    ]
  }
}
</script>

<template>
  <div class="home">
    <Hero />
    <Projects />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
export default {
  name: 'Home',
  components: {Projects, Hero},
}
</script>

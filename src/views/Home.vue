<template>
  <div class="home">
    <Hero />
    <Projects :limit="5" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
export default {
  name: 'Home',
  components: {Projects, Hero},
}
</script>

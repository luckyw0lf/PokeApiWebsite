<template>
  <div class="w-full flex justify-center">
    <div class="w-3/4">
    <nav class="flex justify-center items-center">
      <poke-dex-logo/>
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
    </nav>
    <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import PokeDexLogo from "@/components/PokeDexLogo";

export default {
  components: {
    PokeDexLogo
  }
}
</script>


<template>
  <div class="w-full flex justify-center text-white">
    <div class="w-11/12 sm:w-3/4">
    <nav class="flex justify-center items-center">
          <router-link to="/"><PokeDexLogo/></router-link>
          <LangSelector/>
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

</style>
<script>
import PokeDexLogo from "@/components/PokeDexLogo";
import LangSelector from "@/components/LangSelector"
import {Options, Vue} from "vue-class-component";

@Options({
  components: {
    PokeDexLogo,
    LangSelector
  }
})
export default class App extends Vue{

}
</script>


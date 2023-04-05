<template>
  <div class="home flex flex-col justify-center">
    <HomeInfo/>
    <HomePokemons/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeInfo from "@/components/HomeInfo.vue";
import HomePokemons from "@/components/HomePokemons.vue";

@Options({
  components: {
    HomeInfo,
    HomePokemons
  },
})
export default class HomeView extends Vue {}
</script>

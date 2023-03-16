<template>
  <div class="flex justify-between">
    <div class="flex align-middle justify-center">
      <h1 class="text-4xl">{{ capataliseFirst(pokemon.name) }}</h1>
      <PokemonTypeIcon class="h-6 ml-2" :type="pokemon.types[0].type.name"/>
    </div>
    <router-link :to="{ name: 'home'}">
      <div class="p-4 bg-blue-500 rounded-md h-10 items-center flex text-white">
        back
      </div>
    </router-link>
  </div>
  <div class="text-white flex flex-col justify-center items-center pb-2">
      <div v-if="position === 0 || position === 1">Normal</div>
      <div v-if="position === 2 || position === 3">Shiny</div>
    <div :class="'bg-'+pokemon.types[0].type.name+''" class="px-12 rounded-2xl flex flex-row items-center ">
      <button v-on:click="previous()">&leftarrow;</button>
      <img v-if="position === 0" class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.front_default" alt="">
      <img v-if="position === 1" class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.back_default" alt="">
      <img v-if="position === 2" class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.front_shiny" alt="">
      <img v-if="position === 3" class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.back_shiny" alt="">
      <button v-on:click="next()">&rightarrow;</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PokemonTypeIcon from "@/components/PokemonTypeIcon.vue";
import {Pokemon} from "@/api/Pokemon";
import LoadingElement from "@/components/LoadingElement.vue";

@Options({
  components: {LoadingElement, PokemonTypeIcon},
  props: {
    pokemon: {} as Pokemon
  }
})

export default class PokemonHeader extends Vue {
  pokemon!: Pokemon
  position = 0
  imageAmount = 4;

  capataliseFirst(string: string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  next(){
    this.position = (this.position+1) % this.imageAmount
  }

  previous(){
    this.position = (this.position+this.imageAmount-1) % this.imageAmount
  }
}
</script>

<style scoped>

</style>

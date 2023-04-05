<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import {homeApiCall} from "@/api/ApiFunctions";
import PokemonCard from "@/components/PokemonCard.vue";
import {HomeApiCall} from "@/api/ApiCall";
import {BasePokemon} from "@/api/Pokemon";
import {pagenation} from "@/state/pagenation";

@Options({
  components: {PokemonCard},

  props: {
    limit: Number,
  }
})
export default class HomePokemons extends Vue {
  limit = 20
  results: HomeApiCall|string = "Loading"
  loadedPokemon: BasePokemon[]|string = "loading"
  greyOutPrev = true;

  created(){
    homeApiCall().then(apiresult => {
      this.results = apiresult
    }).finally(() => this.refreshPokemons())
  }

  refreshPokemons(){
    if(typeof this.results !== "string")
      this.loadedPokemon = this.results.results.slice(pagenation.offset, pagenation.offset+this.limit)
    this.greyOutPrev = pagenation.offset === 0
  }

  next(){
    pagenation.changeOffset(pagenation.offset+this.limit)
    this.refreshPokemons()
  }

  previous(){
    pagenation.changeOffset(pagenation.offset-this.limit)
    this.refreshPokemons()
  }
}
</script>
<template>
  <div v-if="typeof loadedPokemon !== 'string'" class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-5">
    <div v-on:change="loadedPokemon" class="flex justify-center border-t-4 border-r-2 border-l-gray-700 border-b-gray-700 border-b border-l border-bag_light rounded-md" v-for="pokemon in loadedPokemon" v-bind:key="pokemon">
      <PokemonCard class="w-full flex items-center bg-bag rounded-sm" :pokemon="pokemon"/>
    </div>
  </div>
  <div class="flex text-center justify-center text-black">
    <div class="w-full flex justify-center">
      <div class="p-5 bg-gray-100 rounded-md w-3/4 sm:w-1/2" v-if="!greyOutPrev"  v-on:click="previous()">previous</div>
      <div class="p-5 bg-gray-100 rounded-md w-3/4 sm:w-1/2 text-gray-400" v-else>previous</div>
    </div>
    <div class="w-full flex justify-center">
      <div class="p-5 bg-gray-100 rounded-md w-3/4 sm:w-1/2" v-on:click="next()">next</div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import {homeApiCall} from "@/api/ApiFunctions";
import PokemonCard from "@/components/PokemonCard.vue";
import {HomeApiCall} from "@/api/ApiCall";
import {Watch} from "vue-property-decorator";

@Options({
  components: {PokemonCard},

  props: {
    limit: Number,
  }
})
export default class HomePokemons extends Vue {
  limit!: number
  offset = 0
  results: HomeApiCall|string = "Loading"
  show = false

  created(){
    this.refreshPokemons()
  }

  @Watch('results')
  public watchResults(call: HomeApiCall){
    this.results = call
    this.show = true
  }

  refreshPokemons(){
    this.results = "Loading"
    homeApiCall(this.limit, this.offset).then(apiresult => {
      this.results = apiresult
    })
  }

  next(){
    this.offset+=this.limit
    this.refreshPokemons()
  }

  previous(){
    this.offset-=this.limit
    this.refreshPokemons()
  }
}
</script>
<template>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-5">
    <div class="flex justify-center border-t-4 border-r-2 border-l-gray-700 border-b-gray-700 border-b border-l border-bag_light rounded-md" v-for="pokemon in results.results" v-bind:key="pokemon">
      <PokemonCard class="w-full flex items-center bg-bag rounded-sm" :pokemon="pokemon"/>
    </div>
  </div>
  <div class="flex text-center justify-center text-black">
    <div class="w-full flex justify-center">
      <div class="p-5 bg-gray-100 rounded-md w-3/4 sm:w-1/2" v-if="this.offset-this.limit >= 0"  v-on:click="previous()">previous</div>
      <div class="p-5 bg-gray-100 rounded-md w-3/4 sm:w-1/2 text-gray-400" v-else>previous</div>
    </div>
    <div class="w-full flex justify-center">
      <div class="p-5 bg-gray-100 rounded-md w-3/4 sm:w-1/2" v-on:click="next()">next</div>
    </div>
  </div>
</template>

<style scoped>

</style>

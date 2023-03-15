<template>
  <h2 class="text-2xl">{{title}}</h2>
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 pb-2">
    <div v-for="move in learnsAtLevel" v-bind:key="move">
      <PokemonMove :base="move"/>
    </div>
  </div>
  <details>
    <summary class="text-2xl">
      {{tmTitle}}
    </summary>
    <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      <div v-for="move in tmCase" v-bind:key="move">
        <PokemonMove :base="move"/>
      </div>
    </div>
  </details>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PokemonMove from "./PokemonMove.vue";
import {Pokemon} from "@/api/Pokemon";
import {MoveData} from "@/api/Move";

@Options({
  components: {
    PokemonMove
  },
  props: {
    pokemon: Pokemon,
    title: String,
    tmTitle: String
  }
})

export default class PokemonAbilities extends Vue {
  pokemon!: Pokemon
  learnsAtLevel: MoveData[] = []
  tmCase: MoveData[] = []

  created(){
    for(const move of this.pokemon.moves)
      move.version_group_details[0].level_learned_at === 0 ? this.tmCase.push(move) : this.learnsAtLevel.push(move)
  }
}
</script>

<style scoped>

</style>
<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import {BasePokemon} from "@/api/Pokemon";
import PokemonImage from "@/components/PokemonImage.vue";

@Options({
  components: {PokemonImage},

  props: {
    pokemon: {name: String, url: String}
  }
})

export default class PokemonCard extends Vue {
  pokemon!: BasePokemon

  capataliseFirst(string: string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
</script>

<template>
  <router-link :to="{ name: 'pokemon', params: { name: pokemon.name }}" class="flex flex-col justify-center">
    <PokemonImage :url="pokemon.url"/>
    <p class="flex justify-center text-center">
      {{ capataliseFirst(this.pokemon.name) }}
    </p>
  </router-link>
</template>


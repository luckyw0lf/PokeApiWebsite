<template>
  <div v-for="ability in pokemon.abilities" v-bind:key="ability">
    <PokemonAbility :base="ability"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import PokemonAbility from "./PokemonAbility.vue";
import {Pokemon} from "@/api/Pokemon";

@Options({
  components: {
    PokemonAbility
  },
 props: {
   pokemon: Pokemon
 }
})

export default class PokemonAbilities extends Vue {
  pokemon!: Pokemon
}
</script>
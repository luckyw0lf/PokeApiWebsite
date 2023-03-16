<template>
  <div v-for="ability in pokemon.abilities" v-bind:key="ability">
    <AbilityRender :base="ability"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Pokemon} from "@/api/Pokemon";
import AbilityRender from "@/components/pokemon/structures/ability/AbilityRender.vue";

@Options({
  components: {
    AbilityRender
  },
 props: {
   pokemon: {} as Pokemon
 }
})

export default class PokemonAbilities extends Vue {
  pokemon!: Pokemon
}
</script>

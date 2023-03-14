<template>
  <img v-if="type === 'bug'" src="@/assets/Type_Bug.webp" alt="">
  <img v-else-if="type === 'dark'" src="@/assets/Type_Dark.webp" alt="">
  <img v-else-if="type === 'dragon'" src="@/assets/Type_Dragon.webp" alt="">
  <img v-else-if="type === 'electric'" src="@/assets/Type_Electric.webp" alt="">
  <img v-else-if="type === 'fairy'" src="@/assets/Type_Fairy.webp" alt="">
  <img v-else-if="type === 'fighting'" src="@/assets/Type_Fighting.webp" alt="">
  <img v-else-if="type === 'fire'" src="@/assets/Type_Fire.webp" alt="">
  <img v-else-if="type === 'flying'" src="@/assets/Type_Flying.webp" alt="">
  <img v-else-if="type === 'ghost'" src="@/assets/Type_Ghost.webp" alt="">
  <img v-else-if="type === 'grass'" src="@/assets/Type_Grass.webp" alt="">
  <img v-else-if="type === 'ground'" src="@/assets/Type_Ground.webp" alt="">
  <img v-else-if="type === 'ice'" src="@/assets/Type_Ice.webp" alt="">
  <img v-else-if="type === 'normal'" src="@/assets/Type_Normal.webp" alt="">
  <img v-else-if="type === 'poison'" src="@/assets/Type_Poison.webp" alt="">
  <img v-else-if="type === 'psychic'" src="@/assets/Type_Psychic.webp" alt="">
  <img v-else-if="type === 'rock'" src="@/assets/Type_Rock.webp" alt="">
  <img v-else-if="type === 'steel'" src="@/assets/Type_Steel.webp" alt="">
  <img v-else-if="type === 'water'" src="@/assets/Type_Water.webp" alt="">
  <img v-else src="@/assets/Type_3F%3F.webp" alt="">
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    type: String
  }
})
export default class PokemonTypeIcon extends Vue {
  type!: string
}
</script>

<style scoped>

</style>
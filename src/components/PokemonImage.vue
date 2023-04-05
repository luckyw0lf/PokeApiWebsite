<template>
  <img class="object-cover w-20" :src="imagePath()" alt="">
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    url: String,
  }
})
export default class PokemonImage extends Vue {
  url!: string
  basepath = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
  regex = /\/(\d+)\/?$/

  imagePath(){
    const match = this.regex.exec(this.url);
    if(match)
      return new URL(this.basepath+match[1]+".png", import.meta.url)
    return ""
  }
}
</script>

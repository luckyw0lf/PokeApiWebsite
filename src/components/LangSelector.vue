<template>
  <select v-on:change="change()" class="text-black" v-model="selectedLanguage">
    <option>en</option>
    <option>de</option>
    <option>es</option>
    <option>it</option>
    <option>ko</option>
    <option>ja</option>
  </select>
</template>

<script>

import {Vue} from "vue-class-component";
import {lang} from "@/state/language";

export default class PokemonMoves extends Vue {
  selectedLanguage = lang.name

  change(){
    lang.change(this.selectedLanguage)
  }
}
</script>

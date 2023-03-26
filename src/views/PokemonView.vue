<template>
  <LoadingElement :show="showPokemon">
    <PokemonHeader :pokemon="pokemon"/>
  </LoadingElement>
  <LoadingElement :show="showPokemon">
    <div class="grid grid-cols-1 sm:grid-cols-3 pb-4">
      <div class="list-inside pb-4 sm:pb-0">
        <h2 class="text-2xl">Abilities:</h2>
        <PokemonAbilities :pokemon="pokemon"/>
      </div>
      <div>
        <LoadingElement :show="showEncounterMethod" :elseif="encounteredNotFound">
          <PokemonEncounters :encounters="encounterMethod"/>
        </LoadingElement>
      </div>
    </div>
    <PokemonMoves title="Moves (learnt)" tm-title="Moves (TM)" :pokemon="pokemon"/>
  </LoadingElement>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Pokemon} from "@/api/Pokemon";
import {
  getNamedApiResourceByUrl,
  getPokemonByName
} from "@/api/ApiFunctions";
import {Ability} from "@/api/Ability";
import PokemonTypeIcon from "@/components/PokemonTypeIcon.vue";
import LoadingElement from "@/components/LoadingElement.vue";
import PokemonHeader from "@/components/pokemon/PokemonHeader.vue";
import PokemonAbilities from "@/components/pokemon/PokemonAbilities.vue";
import { lang } from "@/state/language";
import PokemonMoves from "@/components/pokemon/structures/PokemonMoves.vue";
import PokemonEncounters from "@/components/pokemon/structures/PokemonEncounters.vue";
import {BaseEncounterMethod} from "@/api/EncounterMethod";

@Options({
  components: {PokemonEncounters, PokemonMoves, PokemonTypeIcon, LoadingElement, PokemonHeader, PokemonAbilities},
})

export default class PokemonView extends Vue {
  pokemon: Pokemon|undefined
  abilities: Ability[] = []
  encounterMethod: BaseEncounterMethod[]|undefined

  showPokemon = false
  showEncounterMethod = false

  encounteredNotFound = false
  lang = lang

  created(){
    this.getPokemon()
        .then(() => {this.getEncounterMethod()})
  }

  private getPokemon(){
    return getPokemonByName(this.$route.params.name.toString())
        .then(apiresult => { this.pokemon = apiresult })
        .finally(() => this.showPokemon = true)
  }

  private getEncounterMethod(){
    if(this.pokemon !== undefined){
      getNamedApiResourceByUrl(this.pokemon.location_area_encounters)
          .then(apiresult => {
            this.encounterMethod = apiresult as BaseEncounterMethod[]
            this.showEncounterMethod = true
          })
          .catch(() => {this.encounteredNotFound = true})
    }
  }
}
</script>


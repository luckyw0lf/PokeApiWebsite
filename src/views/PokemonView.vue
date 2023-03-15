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
          <h2 class="text-2xl">Encounter method:</h2>
          {{lang.filter(encounterMethod.names)[0].name}}
          <template v-slot:elseif>
            <h2 class="text-2xl">
              Encounter method:
            </h2>
            No encounter method found.
          </template>
        </LoadingElement>
      </div>
    </div>
    <PokemonMoves title="Moves (learnt)" tm-title="Moves (TM)" :pokemon="pokemon"/>
  </LoadingElement>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Pokemon} from "@/api/Pokemon";
import {EncounterMethod} from "@/api/EncounterMethod";
import {getEncounterByPokemonID, getPokemonByName} from "@/api/ApiFunctions";
import {Ability} from "@/api/Ability";
import PokemonTypeIcon from "@/components/PokemonTypeIcon.vue";
import LoadingElement from "@/components/LoadingElement.vue";
import PokemonHeader from "@/components/pokemon/PokemonHeader.vue";
import PokemonAbilities from "@/components/pokemon/PokemonAbilities.vue";
import PokemonMoves from "@/components/pokemon/PokemonMoves.vue";
import { lang } from "@/state/language";

@Options({
  components: {PokemonMoves, PokemonTypeIcon, LoadingElement, PokemonHeader, PokemonAbilities},
})

export default class PokemonView extends Vue {
  pokemon: Pokemon|undefined
  abilities: Ability[] = []
  encounterMethod: EncounterMethod|undefined

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
      getEncounterByPokemonID(this.pokemon.id)
          .then(apiresult => {
            this.encounterMethod = apiresult
            this.showEncounterMethod = true
          })
          .catch(error => {this.encounteredNotFound = true})
    }
  }
}
</script>


<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Pokemon} from "@/api/Pokemon";
import {EncounterMethod} from "@/api/EncounterMethod";
import {getAbilityByURL, getEncounterByPokemonID, getPokemonByName} from "@/api/ApiFunctions";
import {Ability} from "@/api/Ability";
import PokemonTypeIcon from "@/components/PokemonTypeIcon.vue";

@Options({
  components: {PokemonTypeIcon},
})

export default class PokemonView extends Vue {
  pokemon: Pokemon|undefined
  abilities: Ability[] = []
  encounterMethod: EncounterMethod|undefined
  showPokemon = false
  showAbilities = false
  showEncounterMethod = false
  encounteredNotFound = false

  created(){
    this.getPokemon()
        .then(() => {
          this.getEncounterMethod()
          if(this.pokemon === undefined)
            return
          if(!this.pokemon.abilities)
            return
          for(const ability of this.pokemon.abilities){
            this.getAbilities(ability.ability.url)
          }
        })
  }

  private getPokemon(){
    return getPokemonByName(this.$route.params.name.toString())
        .then(apiresult => { this.pokemon = apiresult })
        .finally(() => this.showPokemon = true)
  }

  private getEncounterMethod(){
    if(this.pokemon !== undefined){
      getEncounterByPokemonID(this.pokemon.id)
          .then(apiresult => { this.encounterMethod = apiresult })
          .finally(() => {
            if(this.encounterMethod !== undefined)
              this.showEncounterMethod = true
            else {
              this.encounteredNotFound = true
            }
          })
    }
  }

  private getAbilities(ability: string){
    return getAbilityByURL(ability)
        .then(apiresult => { this.abilities.push(apiresult)})
        .finally(() => {
          if(this.abilities.length > 0){
            this.showAbilities = true
          }
        })
  }

  capataliseFirst(string: string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center" v-if="showPokemon">
      <h1 class="text-4xl">{{ capataliseFirst(pokemon.name) }}</h1>
      <PokemonTypeIcon class="h-6 ml-2" :type="pokemon.types[0].type.name"/>
    </div>
    <div v-else>Loading...</div>

    <router-link :to="{ name: 'home'}">
      <div class="p-4 bg-blue-500 rounded-md h-10 items-center flex text-white">
        back
      </div>
    </router-link>
  </div>
  <div class="grid justify-center sm:flex sm:grid-cols-1" v-if="showPokemon">
    <img class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.front_default" alt="">
    <img class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.back_default" alt="">
    <img class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.front_shiny" alt="">
    <img class="object-fill w-52 h-52" v-bind:src="pokemon.sprites.back_shiny" alt="">
  </div>
  <div v-else>Loading...</div>

  <div v-if="showEncounterMethod">
    Encounter method: {{encounterMethod.names.find(value => value.language.name === "en").name??encounterMethod.names[0].name}}
  </div>
  <div v-else-if="encounteredNotFound === false">Loading...</div>
  <div v-else>No encounter method found.</div>

  <div class="w-full sm:w-1/2" v-if="showAbilities">
    Abilities:
    <div class="pl-2" v-for="ability in abilities" v-bind:key="ability">
      <p class="pl-2">
        {{capataliseFirst(ability.name)}}
      </p>
      <details class="pl-4">
        <p class="pl-4">
          {{ability.effect_entries.find(value => value.language.name === "en").effect}}
        </p>
        <summary>Description</summary>
      </details>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

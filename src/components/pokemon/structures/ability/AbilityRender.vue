<template>
  <details class="pl-2">
    <LoadingElement :show="showAbility">
      <p class="pl-4">
        {{lang.filter(ability.effect_entries)[0].effect}}
      </p>
    </LoadingElement>
    <summary @click.once="getAbility()" >{{base.ability.name}}</summary>
  </details>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Ability, AbilityData} from "@/api/Ability";
import {getNamedApiResource} from "@/api/ApiFunctions";
import LoadingElement from "@/components/LoadingElement.vue";
import { lang } from "@/state/language";

@Options({
  components: {
    LoadingElement
  },

  props: {
    base: {} as AbilityData
  }
})

export default class AbilityRender extends Vue {
  base!: AbilityData
  showAbility = false
  ability: Ability | undefined
  lang = lang
  getAbility(){
    return getNamedApiResource(this.base.ability)
        .then(apiresult => { this.ability = apiresult as Ability})
        .finally(() => {
          this.showAbility = true
        })
  }
  capataliseFirst(string: string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}
</script>

<style scoped>

</style>

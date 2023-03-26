<template>
  <details>
    <summary class="text-2xl">
      Encounter methods:
    </summary>
    <div v-for="encounter in encounters" v-bind:key="encounter">
      <EncounterRender :encounter="encounter"/>
<!--        {{encounter}}-->
    </div>
  </details>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {EncounterApiCall} from "@/api/EncounterMethod";
import EncounterRender from "./encounter/EncounterRender.vue";

@Options({
  components: {EncounterRender},
  props: {
    encounters: {} as EncounterApiCall
  }
})

export default class PokemonEncounters extends Vue {
  encounters!: EncounterApiCall | undefined
}
</script>

<style scoped>

</style>
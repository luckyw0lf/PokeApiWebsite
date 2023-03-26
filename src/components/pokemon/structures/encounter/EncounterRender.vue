<template>
  <CDetails :title="encounter.location_area.name">
    <div v-for="detail in encounter.version_details" v-bind:key="detail">
      <CDetails :title="detail.version.name">
        <p class="pl-6">max chance: {{detail.max_chance}}</p>
        <p class="pl-6">max level: {{detail.encounter_details[0].max_level}}</p>
        
        <p class="pl-6">min level: {{detail.encounter_details[0].min_level}}</p>
      </CDetails>
    </div>
  </CDetails>
</template>

<script lang="ts">

import {Options, Vue} from "vue-class-component";
import CDetails from "@/components/pokemon/CDetails.vue";
import {BaseEncounterMethod} from "@/api/EncounterMethod";

@Options({
  components: {
    CDetails
  },

  props: {
    encounter: {
      location_area: {
        name: "",
        url: ""
      },
      version_details: []
    } as BaseEncounterMethod
  }
})

export default class EncounterRender extends Vue {
  encounter!: BaseEncounterMethod
}
</script>
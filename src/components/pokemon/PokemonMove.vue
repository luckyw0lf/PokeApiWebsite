<template>
  <CDetails @click.once="getMove()" :title="base.move.name">
    <LoadingElement :show="showMove">
        <p :class="'bg-'+move.damage_class.name" class=" pl-6">class: {{move.damage_class.name}}</p>
        <p class="pl-6">pp: {{move.pp}}</p>
        <p class="pl-6">accuracy: {{move.accuracy}}</p>
      <CDetails title="flavor text">
        <p class="pl-6">
          {{lang.filter(move.flavor_text_entries)[0].flavor_text}}
        </p>
        <CDetails title="other versions">
          <div v-for="flavor in lang.filter(move.flavor_text_entries)" v-bind:key="flavor" class="pl-6">
            <CDetails :title="flavor.version_group.name">
              <p class="pl-6">{{flavor.flavor_text}}</p>
            </CDetails>
          </div>
        </CDetails>
      </CDetails>
    </LoadingElement>
  </CDetails>
</template>


<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {lang} from "@/state/language";
import {getMoveByURL} from "@/api/ApiFunctions";
import LoadingElement from "@/components/LoadingElement.vue";
import {Move, MoveData} from "@/api/Move";
import CDetails from "./move/CDetails.vue";

@Options({
  components: {
    LoadingElement,
    CDetails
  },

  props: {
    base: MoveData
  }
})

export default class PokemonMoves extends Vue {
  base!: MoveData
  showMove = false
  move: Move | undefined
  lang = lang

  getMove(){
    return getMoveByURL(this.base.move.url)
        .then(apiresult => { this.move = apiresult})
        .finally(() => {
          this.showMove = true
        })
  }
}
</script>

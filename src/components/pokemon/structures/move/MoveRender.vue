<template>
  <CDetails @click.once="getMove()" :title="base.move.name">
    <LoadingElement :show="showMove">
      <p :class="'bg-'+move.damage_class.name" class=" pl-6">class: {{move.damage_class.name}}</p>
      <p class="pl-6">pp: {{move.pp}}</p>
      <p class="pl-6">accuracy: {{move.accuracy}}</p>
      <FlavorText :move="move"/>
    </LoadingElement>
  </CDetails>
</template>


<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {lang} from "@/state/language";
import {getNamedApiResource} from "@/api/ApiFunctions";
import LoadingElement from "@/components/LoadingElement.vue";
import {Move, MoveData} from "@/api/Move";
import CDetails from "@/components/pokemon/CDetails.vue";
import FlavorText from "@/components/pokemon/structures/FlavorText.vue";

@Options({
  components: {
    LoadingElement,
    CDetails,
    FlavorText
  },

  props: {
    base: {} as MoveData
  }
})

export default class MoveRender extends Vue {
  base!: MoveData
  showMove = false
  move: Move | undefined
  lang = lang

  getMove(){
    return getNamedApiResource(this.base.move)
        .then(apiresult => { this.move = apiresult as Move})
        .finally(() => {
          this.showMove = true
        })
  }
}
</script>

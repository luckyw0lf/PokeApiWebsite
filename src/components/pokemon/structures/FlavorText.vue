<template>
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
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {Move} from "@/api/Move";
import CDetails from "@/components/pokemon/CDetails.vue";
import {lang} from "@/state/language";

@Options({
  components: {
    CDetails
  },
  props: {
    move: {} as Move
  }
})
export default class FlavorText extends Vue {
  move!: Move
  lang = lang
}
</script>

<style scoped>

</style>

<template>
  <div v-if="show">
    <slot>

    </slot>
  </div>
  <div v-else-if="elseif"><slot name="elseif"></slot></div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
@Options({
  props: {
    show: Boolean,
    elseif: Boolean
  }
})

export default class LoadingElement extends Vue {
  elseif!: boolean
  finalElseIf = false
  created(){
    this.finalElseIf = this.elseif
  }
}
</script>

<style scoped>

</style>
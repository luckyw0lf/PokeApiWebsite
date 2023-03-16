<template>
  <details class="pl-6">
    <summary class="text-white">
      {{title}}
    </summary>
    <slot>

    </slot>
  </details>
</template>

<script>
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    title: String
  }
})
export default class CDetails extends Vue {}
</script>

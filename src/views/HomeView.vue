<template>
  <div :v-if="show" class="flex flex-col justify-center">
      <div v-for="row in call.name.scoreboard" v-bind:key="row">
        {{match(row)}}
      </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeInfo from "@/components/HomeInfo.vue";
import HomePokemons from "@/components/HomePokemons.vue";
import {ApiCall} from "@/api/ApiCall";
import {apiCall} from "@/api/ApiFunctions";

@Options({
  components: {
    HomeInfo,
  },
})
export default class HomeView extends Vue {
  call: ApiCall | undefined
  regex = /(?<=\|\|§r\s)[A-Za-z0-9_]+/
  show = false
  beforeMount(){
    apiCall("3ee22c7b-a0a8-4b3c-afcd-ba83d275d3d9")
        .then(apiresult => {
          this.call = apiresult
          this.show = true
        })
  }

  match(string: string): string{
    const match = string.match(this.regex)
    if(match){
      return match[0]
    }
    return ""
  }


}
</script>

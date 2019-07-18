<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <children/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import children from '@/components/children.vue'

@Component({ // decorator. just function.
  components: {
    children,
  },
})
export default class Home extends Vue {
  @Provide('message') msg: string = 'provide/inject example'

}
</script>

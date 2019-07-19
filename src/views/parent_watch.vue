<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children :parentMessage="message"/>
    <button @click="changeMessage">메세지를 바꿔줄께요.</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import children from '@/components/children_watch.vue'

@Component({ // decorator. just function.
  components: {
    // HelloWorld,
    // message,
    children,
  },
})
export default class Home extends Vue {
  public message: string = 'hello world'

  changeMessage() {
    this.message = 'change'
  }
}
</script>

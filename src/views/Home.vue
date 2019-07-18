<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <message/> -->
    <children :parentMessage="message"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import message from '@/components/message.vue';
import children from '@/components/children.vue'

@Component({ // decorator. just function.
  components: {
    // HelloWorld,
    // message,
    children,
  },
})
export default class Home extends Vue {
  public message: string = 'hello world'
}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <message/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import message from '@/components/message.vue';

@Component({ // decorator. just function.
  components: {
    // HelloWorld,
    message,
  },
})
export default class Home extends Vue {}
</script>

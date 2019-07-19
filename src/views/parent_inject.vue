<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <children/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import children from '@/components/children_inject.vue'

@Component({ // decorator. just function.
  components: {
    children,
  },
})
export default class Home extends Vue {
  @Provide('message') msg: string = 'provide/inject example' // provide는 부모를 여러번 거쳐도 받을 수 있다. 또한 자식 컴포넌트에게 template에서 명시하지 않아도 된다.

}
</script>

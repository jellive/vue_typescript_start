<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import myCheckbox from '@/components/my-checkbox.vue'

@Component({ // decorator. just function.
  components: {
  },
})
export default class Home extends Vue {
}
</script>

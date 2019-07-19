<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children :parentMessage="message"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import children from '@/components/children_props.vue'

@Component({ // decorator. just function.
  components: {
    children,
  },
})
export default class Props extends Vue {
  public message: string = 'hello world'
}
</script>

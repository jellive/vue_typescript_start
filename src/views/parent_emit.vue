<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <children @counter="counter"/>
      <p>
        부모에서 숫자를 보여줍니다. : {{count}}
      </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import children from '@/components/children_emit.vue'

@Component({ // decorator. just function.
  components: {
    children,
  },
})
export default class Emit extends Vue {
  count: number = 0

  counter() {
    this.count++
  }
}
</script>

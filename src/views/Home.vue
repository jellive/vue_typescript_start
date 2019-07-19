<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <children/> -->
    <h1>약관</h1>
    <p>이 곳에는 동의를 필요하는 어떠한 약관 내용이 들어갑니다.</p>
    <my-checkbox v-model="checked" @change="change"/>
    {{text}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import myCheckbox from '@/components/my-checkbox.vue'

@Component({ // decorator. just function.
  components: {
    // children,
    myCheckbox,
  },
})
export default class Home extends Vue {
  public checked: boolean = false
  public text: string = '동의하지 않습니다.'

  public change(checked: boolean) {
    this.checked = checked
    this.text = this.checked ? '동의합니다' : '동의하지 않습니다.'
  }
}
</script>

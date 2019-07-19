<template>
<div>
    <button @click="counter">자식에서 숫자를 증가시킵니다.</button>
</div>
</template>

<script lang="ts">
import {Component, Vue, Emit} from 'vue-property-decorator'

@Component
export default class Children extends Vue {
    @Emit() // 이름이 같으면 인자값을 안넣어도 됨.
    counter() {
        console.log('count')
    }
}
</script>


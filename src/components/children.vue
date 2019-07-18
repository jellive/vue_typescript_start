<template>
<div>
    {{message}}
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch, Emit, Model, Inject} from 'vue-property-decorator'

@Component
export default class Children extends Vue {
    @Inject() readonly message!: string // !를 넣으면 의도적으로 초기화하지 않았다고 인식함.
}
</script>


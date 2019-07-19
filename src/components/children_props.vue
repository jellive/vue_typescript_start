<template>
<div>
    {{parentMessage}}
</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'

@Component
export default class Children extends Vue {
    @Prop() public readonly parentMessage?: string // !를 넣으면 의도적으로 초기화하지 않았다고 인식함.
    public readonly childrenMessage: string = 'Message from children component'
}
</script>


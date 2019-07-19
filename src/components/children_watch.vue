<template>
<div>
    <p>
        {{alertMessage}}
    </p>
    {{parentMessage}}
</div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

@Component
export default class Children extends Vue {
    @Prop() public parentMessage?: string
    alertMessage: string = ''

    @Watch('parentMessage') // 두번째 인자로 {immediate: true, deep: true}의 형태가 들어갈 수 있는데 immediate는 변경 즉시 호출 여부, deep은 객체 내부의 일부 값만 바뀌어도 호출할 지 여부. watch확인하려면 option은 지워야 함.
    update(value: string, oldValue: string) {
        this.alertMessage = '메세지를 업데이트했습니다.'
    }

}
</script>


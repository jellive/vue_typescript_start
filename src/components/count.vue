<template>
    <div>
        {{count}}
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Getter, State} from 'vuex-class'

export default class Count extends Vue {
    // @Getter readonly count!: number // Getter, State 둘다 접근 가능.
    @State readonly count!: number
}
</script>

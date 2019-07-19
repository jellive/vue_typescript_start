<template>
    <div>
        <count/>
        <button @click="increase">증가</button>
        <button @click="decrease">감소</button>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {Action, Mutation} from 'vuex-class'
import count from '@/components/count.vue'
@Component({
    components: {
        count
    }
})
export default class Count extends Vue {
    @Action readonly increase // 따로 안넣고 이름만 지정해도 됨.
    // increase() {
    //     this.$store.dispatch('increase')
    // }
    @Action readonly decrease
    // decrease() {
    //     this.$store.dispatch('decrease')
    // }

    @Mutation readonly setCount
}
</script>


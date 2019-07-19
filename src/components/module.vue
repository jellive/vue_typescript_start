<template>
    <div>
        {{$store.state}}
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class Module extends Vue {
    created() {
        console.log(this.$store)
        // root, moduleB가 바뀜. moduleA를 바꾸기 위해서는 namespace를 같이 넣어줘야함.
        this.$store.dispatch('setRootData', 'test') 
    }
}
</script>

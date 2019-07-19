<template>
    <div>
        {{$store.getters.count}}
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import count from '@/components/count.vue'

export default class Count extends Vue {

}
</script>

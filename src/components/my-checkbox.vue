<template>
<div>
    <input type="checkbox" :checked="checked" @change="change">
</div>
</template>

<script lang="ts">
import {Vue, Component, Model, Emit} from 'vue-property-decorator'

@Component
export default class MyCheckbox extends Vue {
    @Model('change', {type: Boolean}) public readonly checked!: boolean

    @Emit() // Emit이 Model변경보다 먼저 된다.
    public change(event: Event) {
        return event.target.checked
    }
}
</script>

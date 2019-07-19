<template>
    <input type="checkbox" v-model="checked"/>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import MyCheckbox from '@/components/my-checkbox.vue'
@Component({
    components: {
        MyCheckbox
    }
})
export default class CheckBox extends Vue {
    checked: boolean = false
}
</script>

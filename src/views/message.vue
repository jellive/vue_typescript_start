<template>
    <message/>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import message from '@/components/message.vue'
@Component({
    components: {
        message
    }
})
export default class Message extends Vue {
    
}
</script>

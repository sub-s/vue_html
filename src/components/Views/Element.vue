<template>
    <div>
        <Heading :title="title" />
        <div class="content">
            Element 
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

<script>
import Heading from '../Common/Heading.vue'
export default {
    name: 'ElementWrap',
    components: {
        Heading 
    },
    data() {
        return {
            title : 'Element'
        };
    }
}
</script>
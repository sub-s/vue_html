<template>
    <div>
        <Title :title="title" />
        <div class="content">
            Element 
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

<script>
import Title from '../Common/TitleItem.vue'
export default {
    name: 'ElementWrap',
    components: {
        Title 
    },
    data() {
        return {
            title : 'Element'
        };
    }
}
</script>
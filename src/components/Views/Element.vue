<template>
    <div>
        <HeadingItem :level="2" :title="title" />
        <div class="content">
            Element 
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

<script>
// import Heading from '../Common/HeadingItem.vue'
export default {
    name: 'ElementWrap',
    components: {
        // Heading 
    },
    data() {
        return {
            title : 'Element'
        };
    }
}
</script>
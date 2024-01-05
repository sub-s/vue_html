<template>
    <div>
        <Heading :level="2" :title="title" />
        <div class="content">
            Home
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
<script>

import Heading from '../Common/Heading.vue'
export default {
    name: 'HomeWrap',
    components: {
        Heading,
    },
    data() {
        return {
            title : 'Home'
        };
    }
}

</script>
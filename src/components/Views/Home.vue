<template>
    <div>
        <Heading :title="title" />
        <div class="content">
            Home
        </div>
    </div>
</template>
<script>

import Heading from '../Common/Heading.vue'
export default {
    name: 'HomeWrap',
    components: {
        Heading 
    },
    data() {
        return {
            title : 'Home'
        };
    }
}

</script>
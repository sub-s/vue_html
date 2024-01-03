<template>
    <div>
        <Title :title="title" />
        <div class="content">
            Home
        </div>
    </div>
</template>
<script>

import Title from '../Common/TitleItem.vue'
export default {
    name: 'HomeWrap',
    components: {
        Title 
    },
    data() {
        return {
            title : 'Home'
        };
    }
}

</script>
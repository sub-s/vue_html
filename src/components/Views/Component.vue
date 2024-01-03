<template>
    <div>
        <Title :title="title" />
        <div class="content">
            <Buttons :btnTitle="btnTitle"/>
            <Buttons :classType="classType">버튼입니다.</Buttons>
            <Buttons :classType="`${classType} ${sizeType}`">버튼입니다.</Buttons>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>

import Title from '../Common/TitleItem.vue'
import Buttons from '../Common/Buttons.vue'
export default {
    name: 'GuideWrap',
    components: {
        Title,
        Buttons
    },
    data() {
        return {
            title : 'Component',
            btnTitle: '버튼',
            classType : 'a',
            sizeType: 'large'
        };
    }
}

</script>
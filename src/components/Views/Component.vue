<template>
    <div>
        <Heading :level="2" :title="title" />
        <div class="content">
            <Heading :level="3" :title="subTitle" :classType="headClass" />
            
            <div class="content-section">
                <Buttons :btnTitle="btnTitle" />
                <Buttons :btnTitle="btnTitle" :classType="primary">primary</Buttons>
                <Buttons :btnTitle="btnTitle" :classType="disabled">disabled </Buttons>
                <Buttons :btnTitle="btnTitle" :classType="warning"> Warning </Buttons>
                <Buttons :btnTitle="btnTitle" :classType="info"> info </Buttons>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content-section {margin-top: 10rem;}
    .head {color: #666}
</style>
<script>

import Heading from '../Common/Heading.vue';
import Buttons from '../Common/Buttons.vue';
export default {
    name: 'GuideWrap',
    components: {
        Heading,
        Buttons
    },
    data() {
        return {
            title : 'Component',
            subTitle : 'Buttons',
            btnTitle: '버튼',
            sizeType: 'large',
            headClass : 'head',
            primary : 'primary',
            disabled : 'disabled',
            warning : "warning ",
            info : "info",
            
        };
    }
}

</script>

<template>
    <div>
        <Heading :level="2" :title="title" />
        <div class="content">
            <Heading :level="3" :title="subTitle" :classType="headClass" />
            
            <div class="content-section">
                <Buttons :btnTitle="btns.btnTitle" />
                <Buttons :btnTitle="btns.btnTitle" :classType="btns.primary">primary</Buttons>
                <Buttons :btnTitle="btns.btnTitle" :classType="btns.disabled">disabled</Buttons>
                <Buttons :btnTitle="btns.btnTitle" :classType="btns.warning">Warning</Buttons>
                <Buttons :btnTitle="btns.btnTitle" :classType="btns.info">info</Buttons>
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
            headClass : 'head',
            btns : {
                btnTitle: '버튼',
                primary : 'primary',
                disabled : 'disabled',
                warning : "warning ",
                info : "info",
            },
            
        };
    }
}

</script>

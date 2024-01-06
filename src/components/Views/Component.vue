<template>
    <div>
        <Heading :level="2" :title="title" />
        <div class="content">
            <Heading :level="3" :title="subTitle" :classType="headClass" />
            <div class="content-section">
                <ButtonsItem :btnTitle="btns.btnTitle" />
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.primary">primary</ButtonsItem>
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.disabled">disabled</ButtonsItem>
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.warning">Warning</ButtonsItem>
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.info">info</ButtonsItem>
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
export default {
    name: 'GuideWrap',
    components: {
        Heading,
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

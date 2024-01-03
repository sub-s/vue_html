<template>
    <div class="footer">
        <div class="inner">
            Copyright © 2022-{{ currentDate }} Constant Company All rights reserved.
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .footer {
        border-top: 1rem solid #ddd;
        .inner {
            width: 1280rem;
            margin: 0 auto;
            padding: 20rem;
            box-sizing: border-box;
        }
    }
</style>
<script>
export default {
    name: 'FooterWrapper',
    data() {
        return {
            currentDate: new Date().getFullYear(),
        };
    },
    methods : {

    }

}
</script>
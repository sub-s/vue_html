<template>
     <div class="title-area">
        <h2>{{ title }}</h2>
    </div>
</template>
<style lang="scss" scoped>
    .title-area {
        display: flex;
        align-items: center;
        padding-bottom: 10rem;
        margin-bottom: 10rem;
        border-bottom: 1rem solid #ddd;

        h2 {
            font-size: 28rem;
            display: block;
            background: linear-gradient(45deg,#fde2e2, #F56C6C);
            -webkit-background-clip: text; /* WebKit 브라우저에서 필요한 접두사 */
            background-clip: text;
            color: transparent;
        }
    }
</style>
<script>
export default {
    name : 'LogoItem',
    props: {
        title : {
            type : String,
            default : ()=>{
                return '기본 타이틀 입니다.'
            }
        }
    },
    data() {
        return {}
    }
}
</script>
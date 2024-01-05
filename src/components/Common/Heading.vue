<template>
     <div :is="tag" :class="classType">
        {{ title }}
    </div>
</template>
<style lang="scss" scoped>
    h1 {
        font-size: 28rem;
        color: #F56C6C;
    }
    h2 {
        font-size: 28rem;
        color: #F56C6C;
        padding-bottom: 10rem;
        border-bottom: 1rem solid #ddd;
        margin-bottom: 10rem;
    }
    h3 {
        font-size: 26rem;
        color: #F56C6C;
    }
    h4 {
        font-size: 24rem;
        color: #F56C6C;
    }
    
</style>
<script>
export default {
    name : 'LogoItem',
    props: {
        classType: {
            type: String,
            default: ()=>{
                return ''
            }
        },
        level: {
            type: Number,
            required: true
        },
        title : {
            type : String,
            default : ()=>{
                return '기본 타이틀 입니다.'
            }
        }
    },
    data() {
        return {}
    },
    computed: {
        tag(){
            return "h" + this.level;
        },
    }
}
</script>
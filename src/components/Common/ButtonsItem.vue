<template>
    <button type="button" class="btn" :class="classType">
        <slot>
            {{ btnTitle }}
        </slot>
    </button>
</template>



<script>
export default {
    name : 'ButtonsItem',
    props: {
        btnTitle : {
            type : String,
            default : ()=>{
                return '기본 타이틀 입니다.'
            }
        },
        classType: {
            type : String,
            default : ()=>{
                return 'btn'
            }
        },
        sizeType: {
            type : String,
            default : () =>{
                return 'medium'
            }
        }
    },
    data() {
        return {
            
        }
    },
    computed:{
        
    }
}
</script>


<style lang="scss" scoped>
    /* 버튼 셋 */
    .btn {
        transition: all .3s;
        display: inline-flex; 
        justify-content: center; 
        align-items: center; 
        vertical-align:middle; 
        cursor:pointer; 
        white-space:nowrap; 
        border: 1rem solid #777; 
        background-color: #fff; 
        color: #333; 
        height: 40rem; 
        padding:0 12rem; 
        border-radius: 4rem; 
        font-size: 14rem;
        & + .disabled{border-color: #d2d4d9; background-color: #fff; color: #d2d4d9;}
        & + .btn {
            margin-left: 10rem
        }
        &:hover {
            opacity: .7;
        }
    }
    .btn.db{display:block;}
    .btn.xs{height: 24rem;min-width: 30rem;padding: 0 6rem;font-size: 12rem;line-height: 1;border-radius: 3rem;}
    .btn.sm{height: 32rem;min-width: 30rem;padding: 0 14rem;font-size: 14rem;}
    .btn.md{height: 48rem;min-width: 200rem;font-size: 16rem;font-weight: 500;}
    .btn.lg{height: 60rem;min-width: 261rem;padding: 0 30rem;font-size: 18rem;font-weight: 500;}
    .btn.xl{height: 70rem;min-width: 80rem;padding: 0 10rem;font-size: 18rem;font-weight: 700;}

    
    
    
    /* .btn.disabled[class*='ico-']:after,
    .btn:disabled[class*='ico-']:after,
    .btn.disabled[class*='ico-']:before,
    .btn:disabled[class*='ico-']:before{opacity:0.3;} */

    .btn.primary{border-color: #f56c6c; background-color: #f56c6c; color:#fff;  }
    
    .btn.primary:disabled,
    .btn.primary.disabled{color: #b5bcc3; border-color: #e6eaf1; background-color: #e6eaf1;}
    a.btn.disabled{ pointer-events: none; }

    .btn.warning{border-color: #0a9393; background-color: #0a9393; color: #fff;}
    // .btn.warningb:hover{border-color:#c3c6cb; background-color: #c3c6cb;}
    // .btn.warningb:disabled,
    // .btn.warningb.disabled{border-color: #e9eaed; background-color: #e9eaed; color: #bbb;}

    .btn.info{border-color: #909399; background-color:#909399; color: #fff;}
    // .btn.c:hover{border-color:#272b33; color: #272b33;}
    // .btn.c:disabled,
    // .btn.c.disabled{border-color: #d2d4d9; background-color: #fff; color: #d2d4d9;}

    .btn.d{border-color: #bdc0c7; background-color:#fff; color: #242424; border-radius: 4rem;}
    .btn.d:active{border-color:#272b33;}
    .btn.d:disabled,
    .btn.d.disabled{border-color: #d2d4d9; background-color: #fff; color: #d2d4d9;}

    .btn.e{border-color: #f56c6c; background-color: #f56c6c; color:#fff;}
    .btn.e:hover{border-color: #f78989; background-color: #f78989; color:#fff;}
    .btn.e:disabled,
    .btn.e.disabled{border-color: #e6eaf1; background-color: #e6eaf1; color: #b5bcc3;}

    .btn.f{border-color: #4381e4; background-color: #ddeeff; color: #2166d4;}
    .btn.f:disabled,
    .btn.f.disabled{border-color: #bcd6ff; background-color: #f1f8ff; color: #bcd6ff;}
    .btn.f.comp{border-color: #4381e4; background-color: #fff; color: #2166d4;}

    .btn.g{border-color: #4381e4; background-color: #fff; color: #2166d4;}
    .btn.g:disabled,
    .btn.g.disabled{border-color: #bcd6ff; background-color: #fff; color: #bcd6ff;}


</style>
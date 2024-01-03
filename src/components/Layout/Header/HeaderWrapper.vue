<template>
    <div class="header">
        <div class="inner">
            <div class="item">
                <h1><LogoItem /></h1>
            </div>
            <div class="item">
                <div class="gnb">
                    <router-link to="/">Home</router-link>
                    <router-link to="/Element">Element</router-link>
                    <router-link to="/Component">Component</router-link>
                </div>
                <InputItem :placeholder="placeholder" :search="search" v-model="search" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header {
    width: 100%;
    background: linear-gradient(45deg, #fde2e2, #F56C6C);
    .inner {
        width: 1280rem;
        margin: 0 auto;
        padding: 20rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item {
            display: flex;
            align-items: center;
            input {
                margin-left: 20rem;
            }
        }
        h1 {
            width: 50rem;
            height: 50rem;
        }
        .gnb {
            a {
                color: #fff;
                font-weight: 500;
                & + a {
                    margin-left: 20rem;
                    
                }
            }
        }
    }
    
}
</style>
<script>
import LogoItem from '../../Common/LogoItem';
import InputItem from '../../Input/InputItem'
export default {
    name: 'HeaderWrapper',
    components: {
        LogoItem,
        InputItem
    },
    data() {
        return {
            search : '',
            placeholder: '검색어를 입력 하세요.',
        }
    }
}
</script>

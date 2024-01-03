<template>
    <div class="search">
        <input type="text" :placeholder="placeholder" v-model="searchText" />
        <button class="search-btn" type="button">
            <span class="blind">검색버튼</span>
        </button>
        <button class="clear-btn" type="button" v-if="searchText.length > 0" @click.stop="btnClear">
            <span class="blind">검색삭제</span>
        </button>
       
    </div>
</template>

<style lang="scss" scoped>
input::-webkit-input-placeholder {color: #c3c6cb; font-weight: normal;}
input:-ms-input-placeholder {color: #c3c6cb; font-weight: normal;}
textarea::-webkit-input-placeholder {color: #c3c6cb; font-weight: normal;}
textarea:-ms-input-placeholder {color: #c3c6cb; font-weight: normal;}

.search {
    position: relative;
    margin-left: 20rem;
    button {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    };
    .clear-btn {
        right: 30rem;
        width: 18rem; 
        height: 18rem;
        background: url(../../assets/img/common/icon_clear.svg);
        
    }
    .search-btn {
        right: 10rem;
        width: 18rem; 
        height: 18rem;
        background: url(../../assets/img/common/icon_zoom.svg);
    }
    input[type="text"] {
        border: none;
        font-size: 14rem;
        border-radius: 3rem;
        padding: 8rem;
        padding-right: 50rem;
        &[type="number"]{
            font-size: 14rem;
        }
    }
}


</style>
<script>
export default {
    name: 'InputItem',
    data() {
        return {
            searchText : '',
        }
    },
    props: {
        search : {
            type : String,
            default : () => {
                return "";
            }
        },
        placeholder: {
            type: String,
            default : () => {
                return '플레이스 홀더 값이 비어있네요.'
            }
        },
    },
    methods: {
        btnClear(){
            this.searchText = ''
        },
        
    }
    

}
</script>
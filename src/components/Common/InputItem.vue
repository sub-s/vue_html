<template>
    <div class="search">
        <input type="text" :placeholder="placeholder" v-model="searchText" @keydown.enter="inputEnter" />
        <button class="search-btn" type="button" @click.stop="inputEnter">
            <span class="blind">검색버튼</span>
        </button>
        <button class="clear-btn" type="button" v-if="searchText.length > 0" @click.stop="btnClear">
            <span class="blind">검색삭제</span>
        </button>
       
    </div>
</template>

<script>
export default {
    name: 'InputItem',
    data() {
        return {
            searchText : '',
        }
    },
    props: {
        value : {
            type :String,
            default : () => {
                return "";
            }
        },
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
        inputEnter(){
            this.$emit('input', this.searchText);
            this.$emit('enter')
        },
        btnClear(){
            this.searchText = '';
            this.$emit('input', this.searchText);
            this.$emit('clear')
        },
        
    },
    watch: {
        value : {
            handler : function(newValue){
                console.log(newValue)
                this.searchText = newValue;
            },
            deep: true,
            immediate : true,
        }
    }
    

}
</script>
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

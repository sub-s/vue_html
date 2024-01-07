<template>
    <div>
        <div v-if="isAllChecked && vertical === 'top' " :class="{'right': horizontal === 'right'}">
            <label @click="allCheckEvent">
                <input type="checkbox" v-model="allChecked"> 전체 체크
            </label>
        </div>
        <label v-for="(item, index) in checkboxList" :key="index">
            <input type="checkbox" v-model="item.checked"  @change="changeEvent(index)" :disabled="item.disabled" />
            {{ item.title }}
        </label>
        <div v-if="isAllChecked && vertical === 'bottom' " :class="{'right': horizontal === 'right'}" >
            <label @click="allCheckEvent">
                <input type="checkbox" v-model="allChecked"> 전체 체크
            </label>
        </div>
        
    </div>
</template>



<script>
export default {
    name : 'CheckboxItem',
    props: {
        vertical : {
            type: String,
            default : () =>{
                return 'top'
            }
        },
        horizontal : {
            type : String,
            default: ()=>{
                return 'left'
            }
        },
        value : {
            type : [Boolean, Array],
            default : () => {
                return false
            }
        },
        checkName : {
            type : String,
            default : () => {
                return '체크박스'
            }
        },
        list : {
            type : Array,
            default : () => {
                return []
            }
        },
        isAllChecked : {
            type :Boolean,
            default : () => {
                return false
            }
        }
    },
    data() {
        return {
            ch : false,
            checkboxList : [
                
            ],
            allChecked: false,
            temp : true,
        }
    },
    computed:{
        
    },
    methods : {
        changeEvent(){
            this.$emit('input', this.checkboxList)
            this.temp = true;
            for(let i = 0; this.checkboxList.length > i ; i++) {
                console.log(this.checkboxList[i].checked, "------------")
                if(this.checkboxList[i].checked === false) {
                    this.temp = false;
                    break;
                }
            }
            console.log(1111111, this.temp)
            this.allChecked = this.temp
        },
        allCheckEvent(){
            for(var i = 0; this.checkboxList.length > i ; i++) {
                this.checkboxList[i].checked = !this.allChecked;
            }
        }
    },
    watch: {
        list : {
            handler : function (newValue){
                this.checkboxList = newValue;

            },
            deep: true,
            immediate : true, // 크리에이트 될때 무조건 실행
        },
      
    }

}
</script>


<style lang="scss" scoped>
    .right {text-align: right;}

</style>
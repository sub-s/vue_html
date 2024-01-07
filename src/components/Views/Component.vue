<template>
    <div>
        <HeadingItem :level="2" :title="title" />
        <div class="content">
            <div class="content-section">
                <!-- 디세이블은 클래스보다 프롭으로 전달 받아서 트루 펄스 형태로 변경 수정 공부 -->
                <!-- 버튼 타입도 프롭으로 전달 받아서 트루 펄스 형태로 변경 수정 공부 -->
                <HeadingItem :level="3" :title="btns.subTitle" :classType="headClass" />
                <ButtonsItem :btnTitle="btns.btnTitle" />
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.primary">primary</ButtonsItem>
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.disabled">disabled</ButtonsItem>
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.warning">Warning</ButtonsItem>
                <ButtonsItem :btnTitle="btns.btnTitle" :classType="btns.info">info</ButtonsItem>
            </div>

            <div class="content-section">
                <HeadingItem :level="3" :title="checkbox.subTitle" :classType="headClass" />
                
                <div v-for="(item, index) in checkbox.list" :key="index" style="display: inline-block; padding: 5px; border: 1px solid #ddd;">
                    {{ item.id }} 
                    : 
                    {{ item.checked }}
                </div>

                <CheckboxItem 
                    v-model="checkbox.value" 
                    :list="checkbox.list" 
                    :isAllChecked="checkbox.isAllChecked" 
                    :vertical="checkbox.vertical" 
                    :horizontal="checkbox.horizontal"
                 />
               
                <!-- {{ checkbox.value }} -->
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content-section {margin-top: 10rem;}
    .head {color: #666}
</style>
<script>

export default {
    name: 'GuideWrap',
    components: {
        
    },
    data() {
        return {
            title : 'Component',
            headClass : 'head',

            btns : {
                subTitle : 'Buttons',
                btnTitle: '버튼',
                primary : 'primary',
                disabled : 'disabled',
                warning : "warning ",
                info : "info",
            },

            checkbox : {
                subTitle : 'CheckBox',
                value: [],
                list: [
                    {id: 1, title: '체크1', disabled: false, checked: false },
                    {id: 2, title: '체크2', disabled: false, checked: false },
                    {id: 3, title: '체크3', disabled: false, checked: false },
                    {id: 4, title: '체크4', disabled: false, checked: false },
                    {id: 5, title: '체크5', disabled: false, checked: false },
                ],
                vertical: 'bottom',
                horizontal : 'right',
                isAllChecked : true,
            }
            
        };
    },
    mounted(){
        window.$this = this;
    }
}
</script>

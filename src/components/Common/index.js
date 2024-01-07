import ButtonsItem from "./ButtonsItem";
import InputItem from "./InputItem"
import HeadingItem from "./HeadingItem"
import CheckboxItem from "./CheckboxItem"

export default {
    install(Vue){
        Vue.component(ButtonsItem.name, ButtonsItem)
        Vue.component(InputItem.name, InputItem)
        Vue.component(HeadingItem.name, HeadingItem)
        Vue.component(CheckboxItem.name, CheckboxItem)
    }
}
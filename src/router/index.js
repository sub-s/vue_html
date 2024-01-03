import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



const Home = () => {
    return import('../components/Views/Home')   
}
const Element = () => {
    return import('../components/Views/Element')   
}
const Component = () => {
    return import('../components/Views/Component')   
}


export default new VueRouter({
    mode: 'history', // History Mode
	routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Element',
            name: 'Element',
            component: Element
        },
        {
            path : '/Component',
            name: 'Component',
            component: Component
        }

    ],
});

<template>
    <div class="container">
        <div class="inner">
            <router-view/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container {
        .inner{
            width: 1280rem;
            height: 100%;
            margin: 0 auto;
            padding:30rem 20rem;
            box-sizing: border-box;
        }
    }
</style>
<script>
    export default {
        name: 'ContainerWrapper',
        data() {
            return {
                height: 0,
            };
        },
        mounted() {
            // 컨테이너 높이 자동 조정
            const headerHeight = document.body.querySelector('.header').clientHeight;
            const footerHeight = document.body.querySelector('.footer').clientHeight;
            const add = headerHeight + footerHeight;
            const containerHeight = window.innerHeight - add;
            document.querySelector('.container').style.height = containerHeight + 'rem';

            window.addEventListener('resize', this.handleResize)
        },
        beforeDestroy(){
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize(){
                this.height = window.innerHeight;
                const headerHeight = document.body.querySelector('.header').clientHeight;
                const footerHeight = document.body.querySelector('.footer').clientHeight;
                const add = headerHeight + footerHeight;
                const containerHeight = this.height - add;
                document.querySelector('.container').style.height = containerHeight + 'rem'
            }
        }

    }


</script>
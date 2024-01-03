<template>
  <div id="app">
    <HeaderWrapper />
    <ContainerWrapper />
    <FooterWrapper />
  </div>
</template>

<style>
  @import url('./assets/css/common.css');
  @import url('./assets/css/reset.css');
</style>

<script>


import HeaderWrapper from './components/Layout/Header/HeaderWrapper'
import ContainerWrapper from './components/Layout/Container/ContainerWrapper'
import FooterWrapper from './components/Layout/Footer/FooterWrapper'
export default {
  name: 'App',
  components: {
    HeaderWrapper,
    ContainerWrapper,
    FooterWrapper,
  }
}
</script>

<style>

</style>

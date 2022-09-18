<template>
  <router-view>
    <HelloWorld>123</HelloWorld>
  </router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
}
}
</script>

<style>
</style>

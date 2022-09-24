<template>
  <el-menu
    class="headerNav"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-button class="logo" type="primary" bg>MonetBlog</el-button>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/terraria">Terraria</el-menu-item>
    <el-menu-item index="/wowmaps">WowMaps</el-menu-item>
    <el-menu-item disabled>More</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key)
}

</script>

<style>
.logo {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
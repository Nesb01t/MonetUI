<template>
  <el-menu
    class="headerNav"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">Home</el-menu-item>
    <el-menu-item index="2" v-link="{ path: '/terraria'}">Terraria</el-menu-item>
    <el-menu-item index="3">WowMaps</el-menu-item>
    <el-menu-item index="4" disabled>More</el-menu-item>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>

</style>
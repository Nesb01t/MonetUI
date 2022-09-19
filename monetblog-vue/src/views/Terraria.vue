<template>
  <nav class="tr-nav">
    <router-link to="/zs-bis">战士BIS</router-link> |
    <router-link to="/fs-bis">法师BIS</router-link> |
    <router-link to="/ss-bis">射手BIS</router-link> |
    <router-link to="/zhs-bis">召唤师BIS</router-link>
  </nav>
  <el-alert title="info alert" type="info" effect="dark" />
  <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style>
.tr-nav {
  font-size: 20px;
}
</style>
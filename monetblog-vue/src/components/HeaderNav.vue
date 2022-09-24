<template>
  <div class="nav">
    <div class="logo">
      <el-button type="primary" bg>MonetBlog</el-button>
    </div>
    
    <div class="menu">
      <el-menu
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/terraria">Terraria</el-menu-item>
        <el-menu-item index="/wowmaps">WowMaps</el-menu-item>
        <el-menu-item disabled>More</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
.nav {
  display: flex;
  flex-flow: 1;
}

.logo {
  width: 20%;
  
  display: flex;
  justify-content: center;
}
.menu {
  width: 80%;
}
</style>
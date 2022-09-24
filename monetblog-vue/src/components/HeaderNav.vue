<template>
  <div class="top-nav">
    <el-menu
      mode="horizontal"
      id="menu"
      :ellipsis="false"
      router
    >
      <div class="logo">MonetBlog</div>
      <div class="items">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/terraria">Terraria</el-menu-item>
        <el-menu-item index="/wowmaps">WowMaps</el-menu-item>
        <el-menu-item index="/what" disabled>More</el-menu-item>
      </div>
      <div class="right-flow"></div>
    </el-menu>
  </div>
</template>

<script setup>

</script>

<style>
#menu {
  width: 100%;

  display: flex;
  justify-content: space-around;
}

.logo {
  width: 20%;
  background-color:aqua;

  display: flex;
  justify-content: center;
  align-items: center;
}
.items {
  width: 60%;

  display: flex;
  justify-content: center;
}
.right-flow {
  width: 20%;
  background-color:brown;
}
</style>
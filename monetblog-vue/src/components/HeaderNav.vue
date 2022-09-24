<template>
  <div class="header-nav">
    <el-menu
      mode="horizontal"
      @select="handleSelect"
      ellipsis="false"
      id="menu"
      router
    >
      <div class="logo">qwq</div>
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

.header-nav {
  height: 50px;
}

#menu {
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
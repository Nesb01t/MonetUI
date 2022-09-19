<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Terraria">Terraria</router-link> |
      <router-link to="/WowMaps">WowMaps</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #121921;
}

nav {
  padding: 10px;
  font-size: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #182430;
}

nav a.router-link-exact-active {
  color: #7742b9;
}
</style>

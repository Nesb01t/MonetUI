<template>
  <div id="home">
    <span class="bl">1</span>
    <span class="bl">2</span>
    <span class="bl">3</span>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
#home {
  width: 80%;
  height: 300px;
  background-color: palegreen;

  display: flex;
  justify-content: space-around;
}

.bl {
  width: 10%;
  height: 20%;
  background-color: darkcyan;
  margin-right: 5px;
}
</style>
<template>
  <div id="home">
    <span class="bl">我</span>
    <span class="bl">的</span>
    <span class="bl">发</span>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
#home {
  width: 100%;
  height: 500px;
  background-color: palegreen;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bl {
  width: 10%;
  height: 30%;
  background-color: darkcyan;
  margin-right: 5px;
}
</style>
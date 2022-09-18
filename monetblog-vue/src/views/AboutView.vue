<template>
  <h1>v-on事件</h1>
  <button v-on:click="handleClick">click me</button>
</template>


<script>
  import { reactive, toRefs, onBeforeMount, onMounted, onUpdated, onBeforeUpdate } from "vue"
  export default {
    name: "about",
    setup() {
      const data = reactive({
        msg: "message"
      })
      
      const handleClick = () => {
        alert("hello!")
      }

      return {
        ...toRefs(data),
        handleClick
      }
    }
  }
</script>
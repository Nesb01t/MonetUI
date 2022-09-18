<template>
  <h1>vue3的生命周期</h1>
  <div id="dom">{{msg}}</div>
</template>


<script>
  import { reactive, toRefs, onBeforeMount, onMounted } from "vue"
  export default {
    name: "about",
    setup() {
      const data = reactive({
        msg: "message"
      })
      
      onBeforeMount(()=>{ // 数据渲染之前
        console.log("onBeforeMount", document.querySelector("#dom"))
      })

      onMounted(()=>{ // 数据渲染之后
        console.log("onBeforeMount", document.querySelector("#dom"))
      })

      return {
        ...toRefs(data)
      }
    }
  }
</script>
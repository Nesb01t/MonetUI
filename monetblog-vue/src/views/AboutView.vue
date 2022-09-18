<template>
  <h1>vue3的生命周期</h1>
  <div id="dom">{{ msg }}</div>
</template>


<script>
  import { reactive, toRefs, onBeforeMount, onMounted, onUpdated, onBeforeUpdate } from "vue"
  export default {
    name: "about",
    setup() {
      const data = reactive({
        msg: "message"
      })
      
      onBeforeMount(()=>{ // 数据渲染之前
        console.log("onBeforeMount", document.querySelector("#dom"))
        setTimeout(()=>{
          data.msg = "hello!!"
        }, 2000)
      })

      onMounted(()=>{ // 数据渲染之后
        console.log("onBeforeMount", document.querySelector("#dom"))
      })

      onBeforeUpdate(()=>{ // 页面更新之前
        console.log("onBeforeUpdate")
      })

      onUpdated(()=>{ // 页面更新之后-> 页面更改=Update
        console.log("onUpdate")
      })

      return {
        ...toRefs(data)
      }
    }
  }
</script>
<template>
  <h1>hello world</h1>
  <p v-text="name"></p>
  <p>{{ name }}</p>
</template>

<script>
  import { reactive, toRefs } from "vue" // 引用什么就import
  export default {
    name: "home", //这个组件 HomeView.vue 的名字
    setup() { // beforeCreated和created 生命周期
      const data = reactive({
        name: "小美",
        age: 20
      })
      return { ...toRefs(data) }
    }
  }
</script>

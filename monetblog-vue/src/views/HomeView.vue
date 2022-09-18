<template>
  <!-- v-html -->
  <p>{{ info }}</p>
  <p v-html="info"></p>
</template>

<script>
  import { reactive, toRefs } from "vue" // 引用什么就import
  export default { // 程序的js入口函数
    name: "home", //这个组件 HomeView.vue 的名字
    setup() { // beforeCreated和created 生命周期
      const data = reactive({
        name: "小美",
        age: 20,
        info: "<i>富文本斜体字</i>"
      })
      return { ...toRefs(data) }
    }
  }
</script>

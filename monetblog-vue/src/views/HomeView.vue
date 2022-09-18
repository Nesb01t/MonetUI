<template>
  <!-- v-hind 绑定动态属性 -->
  <!-- v-bind:属性名="变量名" -->
  <p v-bind:data="dataVal">我有属性data</p>
</template>

<script>
  import { reactive, toRefs } from "vue" // 引用什么就import
  export default { // 程序的js入口函数
    name: "home", //这个组件 HomeView.vue 的名字
    setup() { // beforeCreated和created 生命周期
      const data = reactive({
        name: "小美",
        age: 20,
        info: "<i>富文本斜体字</i>",
        dataVal: 2
      })
      return { ...toRefs(data) }
    }
  }
</script>

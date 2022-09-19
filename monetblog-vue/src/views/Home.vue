<template>
  <ul>
    <!-- 循环UserList -->
    <!-- v-for=(每一个对象, 下标) in 数组 -->
    <li v-for="(item, index) in userList" :key="index">
      学生姓名: {{ item.userName }}
      学生年龄: {{ item.userAge }}
    </li>
  </ul>
</template>

<script>
  import { reactive, toRefs } from "vue" // 引用什么就import
  export default { // 程序的js入口函数
    name: "home", //这个组件 HomeView.vue 的名字
    setup() { // beforeCreated和created 生命周期
      const data = reactive({
        userList: [
          {
            userName: "a", userAge: 10
          },
          {
            userName: "b", userAge: 10
          },
          {
            userName: "c", userAge: 10
          }
        ]
      })
      return { ...toRefs(data) }
    }
  }
</script>


<style>
  .red{
    color: red;
  }
</style>
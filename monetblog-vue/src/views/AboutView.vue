<template>
  <h1>input 事件</h1>
  <!-- v-model 双向绑定 -->
  <input type="text" placeholder="请输入你的姓名" v-model="userName">
  <textarea placeholder="请输入你的建议" cols="30" rows="10" v-model="userInput"></textarea>
  <p>{{ userName }} -- {{ userInput }}</p>

  <!-- v-on:简写成@ -->
  <button @click="submit">提交</button>
</template>


<script>
  import { reactive, toRefs, onBeforeMount, onMounted, onUpdated, onBeforeUpdate } from "vue"
  export default {
    name: "about",
    setup() {
      const data = reactive({
        msg: "message",
        userName: "",
        userInput: ""
      })
      
      const handleClick = () => {
        alert("hello!")
      }

      const submit = () => {
        alert(`${data.userName}的建议是${data.userInput}`);
        // 这是JS ES6的字符串
      }
      return {
        ...toRefs(data),
        handleClick,
        submit
      }
    }
  }
</script>
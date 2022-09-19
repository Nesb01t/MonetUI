<template>
  <h1>input 事件</h1>
  <!-- v-model 双向绑定 -->
  <!-- input: 输入事件
    blur: 失去焦点
    focus: 获取焦点
    change: 内容更改
  -->
  <input type="text" :placeholder="defaultInput" v-model="userName"
    @focus="handleFocus"
    @blur="handleBlur"><br>
  <input type="text" placeholder="请输入你的电话" v-model="userPhone"><br>
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
        userInput: "",
        userPhone: "",

        defaultInput: "请输入你的名字"
      })
      
      const handleClick = () => {
        defaultInput = ""
      }

      const handleFocus = () => {
        defaultInput = ""
      }

      const handleBlur = () => {
        // alert("hello!")
      }

      const submit = () => {
        alert(`${data.userName}的建议是${data.userInput}`);
        // 这是JS ES6的字符串
      }
      return {
        ...toRefs(data),
        handleClick,
        handleFocus,
        handleBlur,
        submit
      }
    }
  }
</script>
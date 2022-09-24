<template>
  <div class="main">
    <div class="left-menu"></div>
    <div class="show-text">
      {{ showText }}
    </div>
    <div class="right-menu">
      <el-button class="button" @click="showPage('warrior')">战士</el-button>
      <el-button class="button" @click="showPage('mage')">法师</el-button>
      <el-button class="button" @click="showPage('gunner')">射手</el-button>
      <el-button class="button" @click="showPage('summon')">召唤</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: "请在右侧选择职业 !",
      content: {
        warrior: "战士配装",
        mage: "战士配装",
        gunner: "战士配装",
        summon: "战士配装",
      },
    }
  },
  methods: {
    showPage(x){
      this.showText = this.content[x];
    },
  },
}
</script>

<style scoped>
.main {
  margin-top: 3%;
  height: 500px;

  display: flex;
}

.left-menu {
  width: 20%;
}
.show-text {
  font-size: large;

  width: 60%;
  padding-top: 2%;
  box-shadow: var(--el-box-shadow);
}
.right-menu {
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  width: 50%;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;

  box-shadow: var(--el-box-shadow);
  font-weight: bold;
}
</style>
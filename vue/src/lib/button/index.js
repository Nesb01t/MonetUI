import mButton from "./src/main.vue";

mButton.install = function (Vue) {
  Vue.component(mButton.name, mButton);
};

export default mButton;

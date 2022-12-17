import mButton from "./src/main.vue";

mButton.install = function (Vue) {
  Vue.component('mButton', mButton);
};

export default mButton;

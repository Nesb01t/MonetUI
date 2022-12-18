import mButton from "./button";

const components = [
  mButton
]

const install = function (Vue) {
  if(install.installed) return;
  components.map(component => Vue.component(component.name, component))
};

const API = {
  install,
  mButton
};

export default API;

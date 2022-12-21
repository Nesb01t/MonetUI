const components = import.meta.globEager("./**/*.vue");
function install(app) {
  for (let i in components) {
    let component = components[i].default;
    app.component(component.name, component);
  }
}

export default {
  install,
};

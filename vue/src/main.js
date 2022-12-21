import { createApp } from "vue";
import App from "./App.vue";

var app = createApp(App);
app.config.productionTip = false;

app.mount("#app");

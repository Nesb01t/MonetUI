import { createApp } from "vue";
import App from "./App.vue";
import monetUI from "monetui";

var app = createApp(App);
app.use(monetUI)
app.mount("#app");

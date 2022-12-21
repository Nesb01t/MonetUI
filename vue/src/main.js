import { createApp } from "vue";
import App from "./App.vue";
import monetui from "monetui";

var app = createApp(App);
app.config.productionTip = false;

app.use(monetui)
app.mount("#app");

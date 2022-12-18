import { createApp } from "vue";
import App from "./App.vue";
import monetui from "monetui";
import "./assets/main.css";

const app = createApp(App)
app.use(monetui)
app.mount("#app");

<template>
  <div class="button">
    <button
      class="m-button"
      :class="classes"
      @click="onClick"
      :disabled="disabled"
    >
      <div class="content"><slot></slot></div>
    </button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const disabled = ref(false);
const classes = reactive({});

const size = defineProps({
  size: {
    type: String,
    default: "medium",
    validator: (value) => {
      return ["small", "medium", "mini"].includes(value);
    },
  },
});
</script>

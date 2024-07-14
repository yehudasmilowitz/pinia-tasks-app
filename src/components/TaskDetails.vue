<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Task } from "../stores/TaskStore";

defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
});
</script>

<style scoped></style>

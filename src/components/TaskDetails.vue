<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="deleteTask(task.id)" class="material-icons">delete</i>
      <i
        @click="toggleFavorite(task)"
        :class="{ active: task.isFavorite }"
        class="material-icons"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Task } from "../stores/TaskStore";
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();

const { deleteTask, toggleFavorite } = taskStore;

defineProps({
  task: {
    type: Object as PropType<Task>,
    required: true,
  },
});
</script>

<style scoped></style>

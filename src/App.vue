<template>
  <main>
    <header>
      <img src="./assets/vue.svg" alt="Vue logo" />
      <h1>Pinia Crash Course</h1>
    </header>
    <p>All Tasks: {{ taskStore.tasks.length }}</p>
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>
    <br />
    <p>Favorites: {{ taskStore.favorites.length }}</p>
    <div class="task-list">
      <div v-for="task in taskStore.favorites" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
const taskStore = useTaskStore();
</script>

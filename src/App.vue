<template>
  <main>
    <header>
      <img src="./assets/vue.svg" alt="Vue logo" />
      <h1>Pinia Crash Course</h1>
    </header>

    <nav class="filter">
      <button @click="filter = 'all'">
        All ({{ taskStore.tasks.length }})
      </button>
      <button @click="filter = 'favorites'">
        Favorites ({{ taskStore.favorites.length }})
      </button>
    </nav>

    <div v-if="filter === 'all'" class="task-list">
      <p>All Tasks: {{ taskStore.tasks.length }}</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>
    <div v-if="filter === 'favorites'" class="task-list">
      <p>Favorites: {{ taskStore.favorites.length }}</p>
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
import { ref } from "vue";

const filter = ref("all");
</script>

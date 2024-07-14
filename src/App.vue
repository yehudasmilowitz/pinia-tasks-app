<template>
  <main>
    <header>
      <img src="./assets/vue.svg" alt="Vue logo" />
      <h1>Pinia Crash Course</h1>
    </header>

    <TaskForm />

    <br />

    <nav class="filter">
      <button @click="filter = 'all'">All ({{ tasks.length }})</button>
      <button @click="filter = 'favorites'">
        Favorites ({{ favorites.length }})
      </button>
    </nav>

    <div v-if="loading" class="loading">Loading tasks...</div>

    <div v-if="filter === 'all'" class="task-list">
      <p>All Tasks: {{ tasks.length }}</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>
    <div v-if="filter === 'favorites'" class="task-list">
      <p>Favorites: {{ favorites.length }}</p>
      <div v-for="task in favorites" :key="task.id">
        <TaskDetails :task="task" :key="task.id" />
      </div>
    </div>

    <button @click="taskStore.$reset()">Reset state</button>
  </main>
</template>

<script setup lang="ts">
import { useTaskStore } from "./stores/TaskStore";
import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
const taskStore = useTaskStore();
import { ref } from "vue";
import { storeToRefs } from "pinia";

const { tasks, favorites, loading } = storeToRefs(taskStore);

taskStore.getTasks();

const filter = ref("all");
</script>
